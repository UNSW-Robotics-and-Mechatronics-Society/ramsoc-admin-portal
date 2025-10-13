// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './objects/TenantMemberInclude.schema';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './objects/TenantMemberOrderByWithRelationInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';
import { TenantMemberScalarFieldEnumSchema } from './enums/TenantMemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantMemberFindManySelectSchema: z.ZodType<Prisma.TenantMemberSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    tenant: z.boolean().optional(),
    user: z.boolean().optional(),
    createdEvents: z.boolean().optional(),
    updatedEvents: z.boolean().optional(),
    createdActivities: z.boolean().optional(),
    updatedActivities: z.boolean().optional(),
    createdActivitySessions: z.boolean().optional(),
    updatedActivitySessions: z.boolean().optional(),
    ActivitySessionCheckIn: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantMemberSelect>;

export const TenantMemberFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    userId: z.boolean().optional(),
    type: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    tenant: z.boolean().optional(),
    user: z.boolean().optional(),
    createdEvents: z.boolean().optional(),
    updatedEvents: z.boolean().optional(),
    createdActivities: z.boolean().optional(),
    updatedActivities: z.boolean().optional(),
    createdActivitySessions: z.boolean().optional(),
    updatedActivitySessions: z.boolean().optional(),
    ActivitySessionCheckIn: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantMemberFindManySchema: z.ZodType<Prisma.TenantMemberFindManyArgs> = z.object({ select: TenantMemberFindManySelectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), orderBy: z.union([TenantMemberOrderByWithRelationInputObjectSchema, TenantMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantMemberWhereInputObjectSchema.optional(), cursor: TenantMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantMemberScalarFieldEnumSchema, TenantMemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberFindManyArgs>;

export const TenantMemberFindManyZodSchema = z.object({ select: TenantMemberFindManySelectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), orderBy: z.union([TenantMemberOrderByWithRelationInputObjectSchema, TenantMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantMemberWhereInputObjectSchema.optional(), cursor: TenantMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantMemberScalarFieldEnumSchema, TenantMemberScalarFieldEnumSchema.array()]).optional() }).strict();