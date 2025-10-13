// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeOrderByWithRelationInputObjectSchema as ActivityTypeOrderByWithRelationInputObjectSchema } from './objects/ActivityTypeOrderByWithRelationInput.schema';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeCountAggregateInputObjectSchema as ActivityTypeCountAggregateInputObjectSchema } from './objects/ActivityTypeCountAggregateInput.schema';
import { ActivityTypeMinAggregateInputObjectSchema as ActivityTypeMinAggregateInputObjectSchema } from './objects/ActivityTypeMinAggregateInput.schema';
import { ActivityTypeMaxAggregateInputObjectSchema as ActivityTypeMaxAggregateInputObjectSchema } from './objects/ActivityTypeMaxAggregateInput.schema';

export const ActivityTypeAggregateSchema: z.ZodType<Prisma.ActivityTypeAggregateArgs> = z.object({ orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivityTypeCountAggregateInputObjectSchema ]).optional(), _min: ActivityTypeMinAggregateInputObjectSchema.optional(), _max: ActivityTypeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeAggregateArgs>;

export const ActivityTypeAggregateZodSchema = z.object({ orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ActivityTypeCountAggregateInputObjectSchema ]).optional(), _min: ActivityTypeMinAggregateInputObjectSchema.optional(), _max: ActivityTypeMaxAggregateInputObjectSchema.optional() }).strict();