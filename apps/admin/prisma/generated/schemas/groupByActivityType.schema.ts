// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeWhereInputObjectSchema as ActivityTypeWhereInputObjectSchema } from './objects/ActivityTypeWhereInput.schema';
import { ActivityTypeOrderByWithAggregationInputObjectSchema as ActivityTypeOrderByWithAggregationInputObjectSchema } from './objects/ActivityTypeOrderByWithAggregationInput.schema';
import { ActivityTypeScalarWhereWithAggregatesInputObjectSchema as ActivityTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/ActivityTypeScalarWhereWithAggregatesInput.schema';
import { ActivityTypeScalarFieldEnumSchema } from './enums/ActivityTypeScalarFieldEnum.schema';
import { ActivityTypeCountAggregateInputObjectSchema as ActivityTypeCountAggregateInputObjectSchema } from './objects/ActivityTypeCountAggregateInput.schema';
import { ActivityTypeMinAggregateInputObjectSchema as ActivityTypeMinAggregateInputObjectSchema } from './objects/ActivityTypeMinAggregateInput.schema';
import { ActivityTypeMaxAggregateInputObjectSchema as ActivityTypeMaxAggregateInputObjectSchema } from './objects/ActivityTypeMaxAggregateInput.schema';

export const ActivityTypeGroupBySchema: z.ZodType<Prisma.ActivityTypeGroupByArgs> = z.object({ where: ActivityTypeWhereInputObjectSchema.optional(), orderBy: z.union([ActivityTypeOrderByWithAggregationInputObjectSchema, ActivityTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivityTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivityTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivityTypeCountAggregateInputObjectSchema ]).optional(), _min: ActivityTypeMinAggregateInputObjectSchema.optional(), _max: ActivityTypeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityTypeGroupByArgs>;

export const ActivityTypeGroupByZodSchema = z.object({ where: ActivityTypeWhereInputObjectSchema.optional(), orderBy: z.union([ActivityTypeOrderByWithAggregationInputObjectSchema, ActivityTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivityTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivityTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivityTypeCountAggregateInputObjectSchema ]).optional(), _min: ActivityTypeMinAggregateInputObjectSchema.optional(), _max: ActivityTypeMaxAggregateInputObjectSchema.optional() }).strict();