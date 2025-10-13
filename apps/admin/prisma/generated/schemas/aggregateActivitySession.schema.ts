// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionOrderByWithRelationInputObjectSchema as ActivitySessionOrderByWithRelationInputObjectSchema } from './objects/ActivitySessionOrderByWithRelationInput.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './objects/ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCountAggregateInputObjectSchema as ActivitySessionCountAggregateInputObjectSchema } from './objects/ActivitySessionCountAggregateInput.schema';
import { ActivitySessionMinAggregateInputObjectSchema as ActivitySessionMinAggregateInputObjectSchema } from './objects/ActivitySessionMinAggregateInput.schema';
import { ActivitySessionMaxAggregateInputObjectSchema as ActivitySessionMaxAggregateInputObjectSchema } from './objects/ActivitySessionMaxAggregateInput.schema';
import { ActivitySessionAvgAggregateInputObjectSchema as ActivitySessionAvgAggregateInputObjectSchema } from './objects/ActivitySessionAvgAggregateInput.schema';
import { ActivitySessionSumAggregateInputObjectSchema as ActivitySessionSumAggregateInputObjectSchema } from './objects/ActivitySessionSumAggregateInput.schema';

export const ActivitySessionAggregateSchema: z.ZodType<Prisma.ActivitySessionAggregateArgs> = z.object({ orderBy: z.union([ActivitySessionOrderByWithRelationInputObjectSchema, ActivitySessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionWhereInputObjectSchema.optional(), cursor: ActivitySessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivitySessionCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionMinAggregateInputObjectSchema.optional(), _max: ActivitySessionMaxAggregateInputObjectSchema.optional(), _avg: ActivitySessionAvgAggregateInputObjectSchema.optional(), _sum: ActivitySessionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionAggregateArgs>;

export const ActivitySessionAggregateZodSchema = z.object({ orderBy: z.union([ActivitySessionOrderByWithRelationInputObjectSchema, ActivitySessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionWhereInputObjectSchema.optional(), cursor: ActivitySessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivitySessionCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionMinAggregateInputObjectSchema.optional(), _max: ActivitySessionMaxAggregateInputObjectSchema.optional(), _avg: ActivitySessionAvgAggregateInputObjectSchema.optional(), _sum: ActivitySessionSumAggregateInputObjectSchema.optional() }).strict();