// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';
import { ActivityOrderByWithAggregationInputObjectSchema as ActivityOrderByWithAggregationInputObjectSchema } from './objects/ActivityOrderByWithAggregationInput.schema';
import { ActivityScalarWhereWithAggregatesInputObjectSchema as ActivityScalarWhereWithAggregatesInputObjectSchema } from './objects/ActivityScalarWhereWithAggregatesInput.schema';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema';
import { ActivityCountAggregateInputObjectSchema as ActivityCountAggregateInputObjectSchema } from './objects/ActivityCountAggregateInput.schema';
import { ActivityMinAggregateInputObjectSchema as ActivityMinAggregateInputObjectSchema } from './objects/ActivityMinAggregateInput.schema';
import { ActivityMaxAggregateInputObjectSchema as ActivityMaxAggregateInputObjectSchema } from './objects/ActivityMaxAggregateInput.schema';

export const ActivityGroupBySchema: z.ZodType<Prisma.ActivityGroupByArgs> = z.object({ where: ActivityWhereInputObjectSchema.optional(), orderBy: z.union([ActivityOrderByWithAggregationInputObjectSchema, ActivityOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivityScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivityScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivityCountAggregateInputObjectSchema ]).optional(), _min: ActivityMinAggregateInputObjectSchema.optional(), _max: ActivityMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityGroupByArgs>;

export const ActivityGroupByZodSchema = z.object({ where: ActivityWhereInputObjectSchema.optional(), orderBy: z.union([ActivityOrderByWithAggregationInputObjectSchema, ActivityOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivityScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivityScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivityCountAggregateInputObjectSchema ]).optional(), _min: ActivityMinAggregateInputObjectSchema.optional(), _max: ActivityMaxAggregateInputObjectSchema.optional() }).strict();