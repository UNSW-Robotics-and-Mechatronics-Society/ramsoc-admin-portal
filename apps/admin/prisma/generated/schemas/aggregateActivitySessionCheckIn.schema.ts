// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInOrderByWithRelationInputObjectSchema as ActivitySessionCheckInOrderByWithRelationInputObjectSchema } from './objects/ActivitySessionCheckInOrderByWithRelationInput.schema';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './objects/ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInCountAggregateInputObjectSchema as ActivitySessionCheckInCountAggregateInputObjectSchema } from './objects/ActivitySessionCheckInCountAggregateInput.schema';
import { ActivitySessionCheckInMinAggregateInputObjectSchema as ActivitySessionCheckInMinAggregateInputObjectSchema } from './objects/ActivitySessionCheckInMinAggregateInput.schema';
import { ActivitySessionCheckInMaxAggregateInputObjectSchema as ActivitySessionCheckInMaxAggregateInputObjectSchema } from './objects/ActivitySessionCheckInMaxAggregateInput.schema';

export const ActivitySessionCheckInAggregateSchema: z.ZodType<Prisma.ActivitySessionCheckInAggregateArgs> = z.object({ orderBy: z.union([ActivitySessionCheckInOrderByWithRelationInputObjectSchema, ActivitySessionCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionCheckInWhereInputObjectSchema.optional(), cursor: ActivitySessionCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivitySessionCheckInCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionCheckInMinAggregateInputObjectSchema.optional(), _max: ActivitySessionCheckInMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInAggregateArgs>;

export const ActivitySessionCheckInAggregateZodSchema = z.object({ orderBy: z.union([ActivitySessionCheckInOrderByWithRelationInputObjectSchema, ActivitySessionCheckInOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionCheckInWhereInputObjectSchema.optional(), cursor: ActivitySessionCheckInWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivitySessionCheckInCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionCheckInMinAggregateInputObjectSchema.optional(), _max: ActivitySessionCheckInMaxAggregateInputObjectSchema.optional() }).strict();