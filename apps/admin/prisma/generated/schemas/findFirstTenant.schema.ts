// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantIncludeObjectSchema as TenantIncludeObjectSchema } from './objects/TenantInclude.schema';
import { TenantOrderByWithRelationInputObjectSchema as TenantOrderByWithRelationInputObjectSchema } from './objects/TenantOrderByWithRelationInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './objects/TenantWhereUniqueInput.schema';
import { TenantScalarFieldEnumSchema } from './enums/TenantScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TenantFindFirstSelectSchema: z.ZodType<Prisma.TenantSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    logo: z.boolean().optional(),
    siteUrl: z.boolean().optional(),
    description: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    tenantMembers: z.boolean().optional(),
    events: z.boolean().optional(),
    activities: z.boolean().optional(),
    activitySessions: z.boolean().optional(),
    activitySessionCheckIns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TenantSelect>;

export const TenantFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    logo: z.boolean().optional(),
    siteUrl: z.boolean().optional(),
    description: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    tenantMembers: z.boolean().optional(),
    events: z.boolean().optional(),
    activities: z.boolean().optional(),
    activitySessions: z.boolean().optional(),
    activitySessionCheckIns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TenantFindFirstSchema: z.ZodType<Prisma.TenantFindFirstArgs> = z.object({ select: TenantFindFirstSelectSchema.optional(), include: TenantIncludeObjectSchema.optional(), orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantScalarFieldEnumSchema, TenantScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantFindFirstArgs>;

export const TenantFindFirstZodSchema = z.object({ select: TenantFindFirstSelectSchema.optional(), include: TenantIncludeObjectSchema.optional(), orderBy: z.union([TenantOrderByWithRelationInputObjectSchema, TenantOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantWhereInputObjectSchema.optional(), cursor: TenantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TenantScalarFieldEnumSchema, TenantScalarFieldEnumSchema.array()]).optional() }).strict();