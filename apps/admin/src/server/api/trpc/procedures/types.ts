import type { Session } from "next-auth";
import type { TRPCContext } from "../context";

import type {
  AuthorizationService,
  Permission,
} from "@/server/auth/permissions";

/**
 * Base config interface
 */
interface BaseProcedureConfig {
  timing?: boolean;
}

/**
 * Configuration type for the generic procedure with explicit access control constraints.
 *
 * This union type enforces strict hierarchical access control rules:
 *
 * **Access Control Hierarchy:**
 * ```
 * Public → Auth → Tenant → Admin/Permissions
 * ```
 *
 * **Access Level Requirements:**
 * ```txt
 * permissions[] → requires: auth: true, tenant: true
 * admin: true   → requires: auth: true, tenant: true
 * tenant: true  → requires: auth: true
 * auth: true    → requires: valid session
 * ```
 *
 * @example
 * ```typescript
 * // ✅ Valid configurations
 * { } // Public
 * { auth: true } // Authenticated only
 * { auth: true, tenant: true } // Tenant member
 * { auth: true, tenant: true, admin: true } // Admin
 * { auth: true, tenant: true, permissions: [Permission.EVENT_CREATE] } // Permission-based
 *
 * // ❌ Invalid configurations (TypeScript will error)
 * { admin: true } // Missing auth and tenant
 * { auth: true, admin: true } // Missing tenant
 * { auth: true, permissions: [...] } // Missing tenant
 * { tenant: true } // Missing auth
 * ```
 */
export type ProcedureConfig = BaseProcedureConfig &
  (
    | {
        // Public procedure - no auth required
        auth?: false;
        tenant?: never;
        admin?: never;
        permissions?: never;
      }
    | {
        // Authenticated procedure - auth required, no tenant features
        auth: true;
        tenant?: false;
        admin?: never;
        permissions?: never;
      }
    | {
        // Tenant member procedure - auth + tenant, no admin features
        auth: true;
        tenant: true;
        admin?: false;
        permissions?: never;
      }
    | {
        // Admin procedure - auth + tenant + admin role
        auth: true;
        tenant: true;
        admin: true;
        permissions?: Permission[]; // Admin can also have specific permissions
      }
    | {
        // Permission-based procedure - auth + tenant + specific permissions
        auth: true;
        tenant: true;
        admin?: false;
        permissions: Permission[]; // At least one permission required
      }
  );

export type PublicProcedureContext = TRPCContext;

export type ProtectedProcedureContext = TRPCContext & {
  session: Session & {
    user: NonNullable<Session["user"]>;
  };
  auth: AuthorizationService;
};

export type TenantProcedureContext = ProtectedProcedureContext & {
  tenantId: string;
};

export type TenantAdminProcedureContext = TenantProcedureContext;
export type PermissionProcedureContext = TenantProcedureContext;

export type AnyProcedureContext =
  | PublicProcedureContext
  | ProtectedProcedureContext
  | TenantProcedureContext
  | TenantAdminProcedureContext
  | PermissionProcedureContext;
