import { db } from "@/server/db";
import { TenantMemberType } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import type { Session } from "next-auth";

export enum Permission {
  TENANT_READ = "tenant:read",
  TENANT_UPDATE = "tenant:update",
  TENANT_DELETE = "tenant:delete",
  // Add more permissions as needed
}

const MEMBER_TYPE_PERMISSIONS: Record<TenantMemberType, Permission[]> = {
  ADMIN: [
    // Admins get all permissions
    ...Object.values(Permission),
  ],
  MEMBER: [],
  MACHINE: [],
};

export class AuthorizationService {
  constructor(private session: Session | null) {}

  /**
   * Get user's memberType in a specific tenant
   */
  async getUserTenantMemberType(
    tenantId: string
  ): Promise<TenantMemberType | null> {
    if (!this.session?.user?.id) return null;

    const member = await db.tenantMember.findFirst({
      where: {
        userId: this.session.user.id,
        tenantId,
        isActive: true,
      },
      select: { type: true },
    });

    return member?.type ?? null;
  }

  /**
   * Check if user has all specified permissions in a tenant
   */
  async hasPermissions(
    tenantId: string,
    permissions: Permission[]
  ): Promise<boolean> {
    const memberType = await this.getUserTenantMemberType(tenantId);
    if (!memberType) return false;

    const rolePermissions = MEMBER_TYPE_PERMISSIONS[memberType];
    return permissions.every((perm) => rolePermissions.includes(perm));
  }

  /**
   * Require a specific permission (throws if not found)
   */
  async requirePermissions(
    tenantId: string,
    permissions: Permission[]
  ): Promise<void> {
    const hasAccess = await this.hasPermissions(tenantId, permissions);
    if (!hasAccess) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: `Missing permission: ${permissions.join(", ")}`,
      });
    }
  }

  /**
   * Check if user is admin in tenant (memberType-based check)
   */
  async isAdmin(tenantId: string): Promise<boolean> {
    const memberType = await this.getUserTenantMemberType(tenantId);
    return memberType === TenantMemberType.ADMIN;
  }

  /**
   * Check if user is at least a member (includes admins)
   */
  async isMember(tenantId: string): Promise<boolean> {
    const memberType = await this.getUserTenantMemberType(tenantId);
    return memberType !== null;
  }

  /**
   * Require admin memberType (throws if not admin)
   */
  async requireAdmin(tenantId: string): Promise<void> {
    const isAdmin = await this.isAdmin(tenantId);
    if (!isAdmin) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Admin memberType required",
      });
    }
  }

  /**
   * Require tenant membership (throws if not a member)
   */
  async requireMembership(tenantId: string): Promise<void> {
    const isMember = await this.isMember(tenantId);
    if (!isMember) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Tenant membership required",
      });
    }
  }
}
