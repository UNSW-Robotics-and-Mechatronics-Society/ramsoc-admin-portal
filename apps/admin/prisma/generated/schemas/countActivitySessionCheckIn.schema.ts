// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInOrderByWithRelationInputObjectSchema as ActivitySessionCheckInOrderByWithRelationInputObjectSchema } from './objects/ActivitySessionCheckInOrderByWithRelationInput.schema';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './objects/ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInCountAggregateInputObjectSchema as ActivitySessionCheckInCountAggregateInputObjectSchema } from './objects/ActivitySessionCheckInCountAggregateInput.schema';

export const ActivitySessionCheckInCountSchema: z.ZodType<Prisma.ActivitySessionCheckInCountArgs> = z.object({ orderBy: z.union([ActivitySessionCheckInOrderByWithRelationInputObjectSchema, ActivitySessionCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionCheckInWhereInputObjectSchema.optional(), cursor: ActivitySessionCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActivitySessionCheckInCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCountArgs>;

export const ActivitySessionCheckInCountZodSchema = z.object({ orderBy: z.union([ActivitySessionCheckInOrderByWithRelationInputObjectSchema, ActivitySessionCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionCheckInWhereInputObjectSchema.optional(), cursor: ActivitySessionCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActivitySessionCheckInCountAggregateInputObjectSchema ]).optional() }).strict();