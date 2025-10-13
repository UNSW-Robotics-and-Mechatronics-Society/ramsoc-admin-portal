// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityOrderByWithRelationInputObjectSchema as ActivityOrderByWithRelationInputObjectSchema } from './objects/ActivityOrderByWithRelationInput.schema';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';
import { ActivityCountAggregateInputObjectSchema as ActivityCountAggregateInputObjectSchema } from './objects/ActivityCountAggregateInput.schema';
import { ActivityMinAggregateInputObjectSchema as ActivityMinAggregateInputObjectSchema } from './objects/ActivityMinAggregateInput.schema';
import { ActivityMaxAggregateInputObjectSchema as ActivityMaxAggregateInputObjectSchema } from './objects/ActivityMaxAggregateInput.schema';

export const ActivityAggregateSchema: z.ZodType<Prisma.ActivityAggregateArgs> = z.object({ orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivityCountAggregateInputObjectSchema ]).optional(), _min: ActivityMinAggregateInputObjectSchema.optional(), _max: ActivityMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityAggregateArgs>;

export const ActivityAggregateZodSchema = z.object({ orderBy: z.union([ActivityOrderByWithRelationInputObjectSchema, ActivityOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityWhereInputObjectSchema.optional(), cursor: ActivityWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivityCountAggregateInputObjectSchema ]).optional(), _min: ActivityMinAggregateInputObjectSchema.optional(), _max: ActivityMaxAggregateInputObjectSchema.optional() }).strict();