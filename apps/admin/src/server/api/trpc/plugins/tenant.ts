import { AuthorizationService, Permission } from "@/server/auth/permissions";
import { initTRPC, TRPCError } from "@trpc/server";
import type { OpenApiMeta } from "trpc-to-openapi";
import { z } from "zod";

/**
 * Tenant access plugin for tRPC
 *
 * Provides middleware to validate tenant access, admin roles, and permissions
 * @see https://trpc.io/docs/server/middlewares#concat
 */
export function createTenantPlugin() {
  const t = initTRPC
    .context<{
      auth: AuthorizationService;
    }>()
    .meta<OpenApiMeta>()
    .create();

  return {
    /**
     * Tenant access plugin procedure
     *
     * Validates user has access to the specified tenant
     */
    tenantAccessProc: t.procedure
      .input(tenantIdSchema)
      .use(async ({ ctx, next, input }) => {
        const { tenantId } = input;

        // Verify user has access to this tenant
        const isMember = await ctx.auth.isMember(tenantId);
        if (!isMember) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Access denied to this tenant",
          });
        }

        return next({
          ctx: {
            ...ctx,
            tenantId,
          },
        });
      }),

    /**
     * Admin role plugin procedure
     *
     * Validates user has admin role in the specified tenant
     */
    adminRoleProc: t.procedure
      .input(tenantIdSchema)
      .use(async ({ ctx, next, input }) => {
        const { tenantId } = input;

        await ctx.auth.requireAdmin(tenantId);

        return next({
          ctx: {
            ...ctx,
            tenantId,
          },
        });
      }),

    /**
     * Permission-based plugin procedure factory
     *
     * Creates procedures that validate specific permissions
     */
    createPermissionProc: (permissions: Permission[]) =>
      t.procedure.input(tenantIdSchema).use(async ({ ctx, next, input }) => {
        const { tenantId } = input;

        await ctx.auth.requirePermissions(tenantId, permissions);

        return next({
          ctx: {
            ...ctx,
            tenantId,
          },
        });
      }),
  };
}

export const tenantIdSchema = z.object({ tenantId: z.cuid() });
