import {
  protectedProcedure,
  tenantAdminProcedure,
  tenantProcedure,
} from "@/server/api/trpc";
import { TenantMemberType, type Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { formatSlug } from "utils/core";
import z from "zod";
import {
  TenantCreateInputSchema,
  TenantDetailsSchema,
  TenantSchema,
  TenantUpdateInputSchema,
} from "./schemas";

export const listTenantProcedure = protectedProcedure
  .meta({
    openapi: {
      method: "GET",
      path: "/tenant/list",
      tags: ["tenant"],
      protect: true,
      summary: "List all tenants",
      description: "Get all tenants",
    },
  })
  .input(z.void())
  .output(z.array(TenantSchema))
  .query(async ({ ctx }) => ctx.db.tenant.findMany());

export const getTenantProcedure = tenantProcedure
  .meta({
    openapi: {
      method: "GET",
      path: "/tenant/{tenantId}",
      tags: ["tenant"],
      protect: true,
      summary: "Get tenant details",
      description:
        "Get detailed information about a specific tenant (requires membership)",
    },
  })
  .input(
    z.object({
      tenantId: z.cuid(),
    })
  )
  .output(TenantDetailsSchema.nullable())
  .query(async ({ ctx, input }) => {
    return ctx.db.tenant.findUnique({
      where: { id: input.tenantId },
      include: {
        tenantMembers: {
          where: { isActive: true },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        _count: {
          select: {
            events: true,
          },
        },
      },
    });
  });

export const createTenantProcedure = protectedProcedure
  .meta({
    openapi: {
      method: "POST",
      path: "/tenant",
      tags: ["tenant"],
      protect: true,
      summary: "Create a new tenant",
      description:
        "Create a new tenant organization with the current user as admin",
    },
  })
  .input(TenantCreateInputSchema)
  .output(TenantDetailsSchema)
  .mutation(async ({ ctx, input }) => {
    const newTenantSlug = formatSlug(input.name);
    // Check if name is already taken
    const existing = await ctx.db.tenant.findUnique({
      where: { name: input.name, slug: newTenantSlug },
    });

    if (existing) {
      throw new TRPCError({
        code: "CONFLICT",
        message: "Tenant name already exists",
      });
    }

    // Create tenant with user as admin
    const tenant = await ctx.db.tenant.create({
      data: {
        name: input.name,
        slug: newTenantSlug,
        description: input.description,
        logo: input.logo,
        siteUrl: input.siteUrl,
        tenantMembers: {
          create: {
            userId: ctx.session.user.id,
            type: TenantMemberType.ADMIN,
            isActive: true,
          },
        },
      },
      include: {
        tenantMembers: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        _count: {
          select: {
            events: true,
          },
        },
      },
    });

    return tenant;
  });

export const updateTenantProcedure = tenantAdminProcedure
  .meta({
    openapi: {
      method: "PUT",
      path: "/tenant/{tenantId}",
      tags: ["tenant"],
      protect: true,
      summary: "Update a tenant",
      description: "Update the details of a tenant (requires admin role)",
    },
  })
  .input(TenantUpdateInputSchema)
  .output(TenantDetailsSchema)
  .mutation(async ({ ctx, input }) => {
    const { tenantId, ...updateData } = input;

    // First verify the tenant exists and user has access
    const existingTenant = await ctx.db.tenant.findUnique({
      where: { id: tenantId },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logo: true,
        siteUrl: true,
      },
    });

    if (!existingTenant) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Tenant not found",
      });
    }

    // Prepare update data with proper validation
    const finalUpdateData: Prisma.TenantUpdateInput = {};

    // Handle name update with conflict checking and slug generation
    if (updateData.name && updateData.name !== existingTenant.name) {
      // Check for name conflicts
      const nameConflict = await ctx.db.tenant.findFirst({
        where: {
          name: updateData.name,
          id: { not: tenantId },
        },
        select: { id: true },
      });

      if (nameConflict) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "A tenant with this name already exists",
        });
      }

      const newSlug = formatSlug(updateData.name);

      // Check for slug conflicts (in case slug generation creates duplicates)
      const slugConflict = await ctx.db.tenant.findFirst({
        where: {
          slug: newSlug,
          id: { not: tenantId },
        },
        select: { id: true },
      });

      if (slugConflict) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Generated slug conflicts with existing tenant",
        });
      }

      finalUpdateData.name = updateData.name;
      finalUpdateData.slug = newSlug;
    }

    // Handle other fields - only include if they're actually changing
    if (
      updateData.description !== undefined &&
      updateData.description !== existingTenant.description
    ) {
      finalUpdateData.description = updateData.description;
    }

    if (
      updateData.logo !== undefined &&
      updateData.logo !== existingTenant.logo
    ) {
      finalUpdateData.logo = updateData.logo;
    }

    if (
      updateData.siteUrl !== undefined &&
      updateData.siteUrl !== existingTenant.siteUrl
    ) {
      // Validate URL format if provided
      if (updateData.siteUrl && updateData.siteUrl.trim()) {
        try {
          new URL(updateData.siteUrl);
        } catch {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid site URL format",
          });
        }
      }
      finalUpdateData.siteUrl = updateData.siteUrl;
    }

    // If no changes were made, return the existing tenant
    if (Object.keys(finalUpdateData).length === 0) {
      return ctx.db.tenant.findUniqueOrThrow({
        where: { id: tenantId },
        include: {
          tenantMembers: {
            where: { isActive: true },
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
            },
          },
          _count: {
            select: {
              events: true,
            },
          },
        },
      });
    }

    // Perform the update with optimistic concurrency control
    try {
      const updatedTenant = await ctx.db.tenant.update({
        where: { id: tenantId },
        data: finalUpdateData,
        include: {
          tenantMembers: {
            where: { isActive: true },
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                },
              },
            },
          },
          _count: {
            select: {
              events: true,
            },
          },
        },
      });

      return updatedTenant;
    } catch (error) {
      // Handle potential race conditions or constraint violations
      if (
        error instanceof Error &&
        error.message.includes("Unique constraint")
      ) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Update failed due to conflicting data. Please try again.",
        });
      }
      throw error;
    }
  });

export const deleteTenantProcedure = tenantAdminProcedure
  .meta({
    openapi: {
      method: "DELETE",
      path: "/tenant/{tenantId}",
      tags: ["tenant"],
      protect: true,
      summary: "Delete a tenant",
      description: "Delete a tenant organization (requires admin role)",
    },
  })
  .input(
    z.object({
      tenantId: z.cuid(),
    })
  )
  .output(
    z.object({
      success: z.boolean(),
      message: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    // Check if tenant has any events (you might want to prevent deletion)
    const eventCount = await ctx.db.event.count({
      where: { tenantId: input.tenantId },
    });

    if (eventCount > 0) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message:
          "Cannot delete tenant with existing events. Delete events first.",
      });
    }

    await ctx.db.tenant.delete({
      where: { id: input.tenantId },
    });

    return {
      success: true,
      message: "Tenant deleted successfully",
    };
  });
