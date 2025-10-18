import { TRPCError } from "@trpc/server";
import { t } from "../init";
import { createDevPlugin } from "../plugins/dev";
import { createTenantPlugin, tenantIdSchema } from "../plugins/tenant";
import type { ProcedureConfig } from "./types";

// Initialize plugins
const tenantPlugin = createTenantPlugin();
const devPlugin = createDevPlugin();

/**
 * Creates a base procedure with timing and auth
 */
const createBaseProcedure = (config: ProcedureConfig) => {
  let procedure = t.procedure;

  // Add timing by default (can be disabled)
  if (config.timing !== false) {
    procedure = procedure.concat(devPlugin.timingProc);
  }

  return procedure;
};

const createAuthProcedure = (
  config: Extract<ProcedureConfig, { auth: true }>
) => {
  return createBaseProcedure(config).use(({ ctx, next }) => {
    if (!ctx.session || !ctx.session?.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({
      ctx: {
        ...ctx,
        // Override session to be non-nullable
        session: { ...ctx.session, user: ctx.session.user },
      },
    });
  });
};

/**
 * Creates a tenant-scoped procedure with all tenant-related middleware
 */
const createTenantProcedure = (
  config: Extract<ProcedureConfig, { auth: true; tenant: true }>
) => {
  // Start with tenant input schema
  let tenantProcedure = createAuthProcedure(config).input(tenantIdSchema);

  // Always add tenant access validation first
  tenantProcedure = tenantProcedure.concat(tenantPlugin.tenantAccessProc);

  // Add admin role validation if required
  if ("admin" in config && config.admin) {
    tenantProcedure = tenantProcedure.concat(tenantPlugin.adminRoleProc);
  }

  // Add permission validation if required
  if (
    "permissions" in config &&
    config.permissions &&
    config.permissions.length > 0
  ) {
    tenantProcedure = tenantProcedure.concat(
      tenantPlugin.createPermissionProc(config.permissions)
    );
  }

  return tenantProcedure;
};

/**
 * Generic procedure factory using plugins
 *
 * Creates procedures with configurable authentication, authorization using .concat()
 *
 * @example
 * ```ts
 * // Public procedure
 * const publicProc = createProcedure();
 *
 * // Authenticated only
 * const authProc = createProcedure({ auth: true });
 *
 * // Tenant member access
 * const tenantProc = createProcedure({ auth: true, tenant: true });
 *
 * // Admin only
 * const adminProc = createProcedure({ auth: true, tenant: true, admin: true });
 *
 * // Permission-based
 * const permissionProc = createProcedure({
 *   auth: true,
 *   tenant: true,
 *   permissions: [Permission.EVENT_CREATE]
 * });
 * ```
 */
export function createProcedure(
  config: ProcedureConfig & { auth: true; tenant: true }
): ReturnType<typeof createTenantProcedure>;

export function createProcedure(
  config: ProcedureConfig & { auth: true; tenant?: false }
): ReturnType<typeof createAuthProcedure>;

export function createProcedure(
  config?: ProcedureConfig & { auth?: false }
): ReturnType<typeof createBaseProcedure>;

export function createProcedure(config: ProcedureConfig = {}) {
  if (config.auth) {
    if (config.tenant) {
      return createTenantProcedure(config);
    }
    return createAuthProcedure(config);
  }

  return createBaseProcedure(config);
}

/** Public procedure (no authentication required) */
export const publicProcedure = createProcedure();

/** Protected procedure (authentication required) */
export const protectedProcedure = createProcedure({ auth: true });

export type { ProcedureConfig };
