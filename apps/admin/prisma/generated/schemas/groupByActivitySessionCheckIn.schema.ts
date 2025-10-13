// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInWhereInputObjectSchema as ActivitySessionCheckInWhereInputObjectSchema } from './objects/ActivitySessionCheckInWhereInput.schema';
import { ActivitySessionCheckInOrderByWithAggregationInputObjectSchema as ActivitySessionCheckInOrderByWithAggregationInputObjectSchema } from './objects/ActivitySessionCheckInOrderByWithAggregationInput.schema';
import { ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema as ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema } from './objects/ActivitySessionCheckInScalarWhereWithAggregatesInput.schema';
import { ActivitySessionCheckInScalarFieldEnumSchema } from './enums/ActivitySessionCheckInScalarFieldEnum.schema';
import { ActivitySessionCheckInCountAggregateInputObjectSchema as ActivitySessionCheckInCountAggregateInputObjectSchema } from './objects/ActivitySessionCheckInCountAggregateInput.schema';
import { ActivitySessionCheckInMinAggregateInputObjectSchema as ActivitySessionCheckInMinAggregateInputObjectSchema } from './objects/ActivitySessionCheckInMinAggregateInput.schema';
import { ActivitySessionCheckInMaxAggregateInputObjectSchema as ActivitySessionCheckInMaxAggregateInputObjectSchema } from './objects/ActivitySessionCheckInMaxAggregateInput.schema';

export const ActivitySessionCheckInGroupBySchema: z.ZodType<Prisma.ActivitySessionCheckInGroupByArgs> = z.object({ where: ActivitySessionCheckInWhereInputObjectSchema.optional(), orderBy: z.union([ActivitySessionCheckInOrderByWithAggregationInputObjectSchema, ActivitySessionCheckInOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivitySessionCheckInScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivitySessionCheckInCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionCheckInMinAggregateInputObjectSchema.optional(), _max: ActivitySessionCheckInMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInGroupByArgs>;

export const ActivitySessionCheckInGroupByZodSchema = z.object({ where: ActivitySessionCheckInWhereInputObjectSchema.optional(), orderBy: z.union([ActivitySessionCheckInOrderByWithAggregationInputObjectSchema, ActivitySessionCheckInOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivitySessionCheckInScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivitySessionCheckInCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionCheckInMinAggregateInputObjectSchema.optional(), _max: ActivitySessionCheckInMaxAggregateInputObjectSchema.optional() }).strict();