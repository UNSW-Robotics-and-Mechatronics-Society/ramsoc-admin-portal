// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityIncludeObjectSchema as ActivityIncludeObjectSchema } from './objects/ActivityInclude.schema';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './objects/ActivityOrderByWithRelationInput.schema';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivityFindFirstSelectSchema: z.ZodType<Prisma.ActivitySelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    eventId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    slug: z.boolean().optional(),
    coverImageUrl: z.boolean().optional(),
    visibility: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    tenant: z.boolean().optional(),
    event: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    types: z.boolean().optional(),
    activitySessions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivitySelect>;

export const ActivityFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    eventId: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    slug: z.boolean().optional(),
    coverImageUrl: z.boolean().optional(),
    visibility: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    tenant: z.boolean().optional(),
    event: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    types: z.boolean().optional(),
    activitySessions: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ActivityFindFirstSchema: z.ZodType<Prisma.ActivityFindFirstArgs> = z.object({ select: ActivityFindFirstSelectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityFindFirstArgs>;

export const ActivityFindFirstZodSchema = z.object({ select: ActivityFindFirstSelectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivityScalarFieldEnumSchema, ActivityScalarFieldEnumSchema.array()]).optional() }).strict();