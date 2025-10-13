// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeOrderByWithRelationInputObjectSchema as ActivityTypeOrderByWithRelationInputObjectSchema } from './objects/ActivityTypeOrderByWithRelationInput.schema';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';
import { ActivityTypeCountAggregateInputObjectSchema as ActivityTypeCountAggregateInputObjectSchema } from './objects/ActivityTypeCountAggregateInput.schema';

export const ActivityTypeCountSchema: z.ZodType<Prisma.ActivityTypeCountArgs> = z.object({ orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActivityTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeCountArgs>;

export const ActivityTypeCountZodSchema = z.object({ orderBy: z.union([ActivityTypeOrderByWithRelationInputObjectSchema, ActivityTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivityTypeWhereInputObjectSchema.optional(), cursor: ActivityTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActivityTypeCountAggregateInputObjectSchema ]).optional() }).strict();