// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInIncludeObjectSchema as ActivitySessionCheckInIncludeObjectSchema } from './objects/ActivitySessionCheckInInclude.schema';
import { ActivitySessionCheckInOrderByWithRelationInputObjectSchema as ActivitySessionCheckInOrderByWithRelationInputObjectSchema } from './objects/ActivitySessionCheckInOrderByWithRelationInput.schema';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './objects/ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInScalarFieldEnumSchema } from './enums/ActivitySessionCheckInScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivitySessionCheckInFindFirstSelectSchema: z.ZodType<Prisma.ActivitySessionCheckInSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    activitySessionId: z.boolean().optional(),
    memberId: z.boolean().optional(),
    checkInTime: z.boolean().optional(),
    tenant: z.boolean().optional(),
    activitySession: z.boolean().optional(),
    member: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInSelect>;

export const ActivitySessionCheckInFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    activitySessionId: z.boolean().optional(),
    memberId: z.boolean().optional(),
    checkInTime: z.boolean().optional(),
    tenant: z.boolean().optional(),
    activitySession: z.boolean().optional(),
    member: z.boolean().optional()
  }).strict();

export const ActivitySessionCheckInFindFirstSchema: z.ZodType<Prisma.ActivitySessionCheckInFindFirstArgs> = z.object({ select: ActivitySessionCheckInFindFirstSelectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), orderBy: z.union([ActivitySessionCheckInOrderByWithRelationInputObjectSchema, ActivitySessionCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionCheckInWhereInputObjectSchema.optional(), cursor: ActivitySessionCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivitySessionCheckInScalarFieldEnumSchema, ActivitySessionCheckInScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInFindFirstArgs>;

export const ActivitySessionCheckInFindFirstZodSchema = z.object({ select: ActivitySessionCheckInFindFirstSelectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), orderBy: z.union([ActivitySessionCheckInOrderByWithRelationInputObjectSchema, ActivitySessionCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionCheckInWhereInputObjectSchema.optional(), cursor: ActivitySessionCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivitySessionCheckInScalarFieldEnumSchema, ActivitySessionCheckInScalarFieldEnumSchema.array()]).optional() }).strict();