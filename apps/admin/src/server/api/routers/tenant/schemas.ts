import { TenantMemberType } from "@prisma/client";
import z from "zod";

export const TenantSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().nullable(),
  siteUrl: z.string().nullable(),
  description: z.string().nullable(),
  createDate: z.date(),
  updateDate: z.date(),
});

export const TenantDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().nullable(),
  siteUrl: z.string().nullable(),
  description: z.string().nullable(),
  createDate: z.date(),
  updateDate: z.date(),
  tenantMembers: z.array(
    z.object({
      id: z.string(),
      type: z.enum(TenantMemberType),
      isActive: z.boolean(),
      createDate: z.date(),
      updateDate: z.date(),
      tenantId: z.string(),
      userId: z.string(),
      user: z.object({
        id: z.string(),
        name: z.string().nullable(),
        email: z.string().nullable(),
      }),
    })
  ),
});

export const TenantCreateInputSchema = z.object({
  name: z.string().min(1).describe("Name of the tenant"),
  description: z
    .string()
    .nullable()
    .describe("Description of the tenant")
    .optional(),
  logo: z.url().nullable().describe("Logo URL of the tenant").optional(),
  siteUrl: z.url().nullable().describe("Site URL of the tenant").optional(),
});

export type TenantCreateInput = z.infer<typeof TenantCreateInputSchema>;

export const TenantUpdateInputSchema = z.object({
  name: z.string().min(1).optional(),
  description: z.string().nullable().optional(),
  logo: z.url().nullable().optional(),
  siteUrl: z.url().nullable().optional(),
});

export type TenantUpdateInput = z.infer<typeof TenantUpdateInputSchema>;
