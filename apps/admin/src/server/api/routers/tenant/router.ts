import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  tenantAdminProcedure,
  tenantProcedure,
} from "@/server/api/trpc";
import { TenantMemberType } from "@prisma/client";
import {
  TenantCreateInputSchema,
  TenantDetailsSchema,
  TenantSchema,
  TenantUpdateInputSchema,
} from "./schemas";

export const tenantRouter = createTRPCRouter({
  list: protectedProcedure
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
    .query(async ({ ctx }) => ctx.db.tenant.findMany()),

  get: tenantProcedure
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
    }),

  create: protectedProcedure
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
      // Check if name is already taken
      const existing = await ctx.db.tenant.findUnique({
        where: { name: input.name },
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
    }),

  update: tenantAdminProcedure
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

      // If updating name, check for conflicts
      if (updateData.name) {
        const existing = await ctx.db.tenant.findFirst({
          where: {
            name: updateData.name,
            id: { not: tenantId },
          },
        });

        if (existing) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Tenant name already exists",
          });
        }
      }

      return ctx.db.tenant.update({
        where: { id: tenantId },
        data: updateData,
      });
    }),

  delete: tenantAdminProcedure
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
    }),
});
