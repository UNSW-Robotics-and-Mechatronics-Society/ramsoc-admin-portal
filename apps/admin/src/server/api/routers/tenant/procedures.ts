import { createProcedure, tenantIdSchema } from "@/server/api/trpc";
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

export const listTenantProcedure = createProcedure({
  auth: true,
})
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

export const getTenantProcedure = createProcedure({
  auth: true,
  tenant: true,
})
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
  .input(tenantIdSchema)
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

export const createTenantProcedure = createProcedure({
  auth: true,
})
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
      },
    });

    return tenant;
  });

export const updateTenantProcedure = createProcedure({
  auth: true,
  tenant: true,
  admin: true,
})
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
  .output(TenantSchema)
  .mutation(async ({ ctx, input }) => {
    const { tenantId, ...updateData } = input;

    const payload: Prisma.TenantUpdateInput = {
      ...updateData,
      ...(updateData.name && { slug: formatSlug(updateData.name) }),
    };

    try {
      return await ctx.db.tenant.update({
        where: { id: tenantId },
        data: payload,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("Unique constraint")
      ) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Name already exists",
        });
      }
      throw error;
    }
  });

export const deleteTenantProcedure = createProcedure({
  auth: true,
  tenant: true,
  admin: true,
})
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
  .input(tenantIdSchema)
  .output(z.void())
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
  });
