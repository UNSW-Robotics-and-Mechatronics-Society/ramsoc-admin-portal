// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionIncludeObjectSchema as ActivitySessionIncludeObjectSchema } from './objects/ActivitySessionInclude.schema';
import { ActivitySessionOrderByWithRelationInputObjectSchema as ActivitySessionOrderByWithRelationInputObjectSchema } from './objects/ActivitySessionOrderByWithRelationInput.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './objects/ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionScalarFieldEnumSchema } from './enums/ActivitySessionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ActivitySessionFindManySelectSchema: z.ZodType<Prisma.ActivitySessionSelect> = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    activityId: z.boolean().optional(),
    visibility: z.boolean().optional(),
    startTime: z.boolean().optional(),
    endTime: z.boolean().optional(),
    location: z.boolean().optional(),
    capacity: z.boolean().optional(),
    codeType: z.boolean().optional(),
    code: z.boolean().optional(),
    codeValidFrom: z.boolean().optional(),
    codeValidTo: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    allowSelfCheckIn: z.boolean().optional(),
    activity: z.boolean().optional(),
    tenant: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    checkIns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ActivitySessionSelect>;

export const ActivitySessionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    tenantId: z.boolean().optional(),
    activityId: z.boolean().optional(),
    visibility: z.boolean().optional(),
    startTime: z.boolean().optional(),
    endTime: z.boolean().optional(),
    location: z.boolean().optional(),
    capacity: z.boolean().optional(),
    codeType: z.boolean().optional(),
    code: z.boolean().optional(),
    codeValidFrom: z.boolean().optional(),
    codeValidTo: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    createdById: z.boolean().optional(),
    updatedById: z.boolean().optional(),
    allowSelfCheckIn: z.boolean().optional(),
    activity: z.boolean().optional(),
    tenant: z.boolean().optional(),
    createdBy: z.boolean().optional(),
    updatedBy: z.boolean().optional(),
    checkIns: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ActivitySessionFindManySchema: z.ZodType<Prisma.ActivitySessionFindManyArgs> = z.object({ select: ActivitySessionFindManySelectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), orderBy: z.union([ActivitySessionOrderByWithRelationInputObjectSchema, ActivitySessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionWhereInputObjectSchema.optional(), cursor: ActivitySessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivitySessionScalarFieldEnumSchema, ActivitySessionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionFindManyArgs>;

export const ActivitySessionFindManyZodSchema = z.object({ select: ActivitySessionFindManySelectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), orderBy: z.union([ActivitySessionOrderByWithRelationInputObjectSchema, ActivitySessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionWhereInputObjectSchema.optional(), cursor: ActivitySessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ActivitySessionScalarFieldEnumSchema, ActivitySessionScalarFieldEnumSchema.array()]).optional() }).strict();