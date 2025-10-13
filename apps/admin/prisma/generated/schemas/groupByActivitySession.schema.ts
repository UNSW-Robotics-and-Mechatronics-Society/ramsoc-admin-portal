// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';
import { ActivitySessionOrderByWithAggregationInputObjectSchema as ActivitySessionOrderByWithAggregationInputObjectSchema } from './objects/ActivitySessionOrderByWithAggregationInput.schema';
import { ActivitySessionScalarWhereWithAggregatesInputObjectSchema as ActivitySessionScalarWhereWithAggregatesInputObjectSchema } from './objects/ActivitySessionScalarWhereWithAggregatesInput.schema';
import { ActivitySessionScalarFieldEnumSchema } from './enums/ActivitySessionScalarFieldEnum.schema';
import { ActivitySessionCountAggregateInputObjectSchema as ActivitySessionCountAggregateInputObjectSchema } from './objects/ActivitySessionCountAggregateInput.schema';
import { ActivitySessionMinAggregateInputObjectSchema as ActivitySessionMinAggregateInputObjectSchema } from './objects/ActivitySessionMinAggregateInput.schema';
import { ActivitySessionMaxAggregateInputObjectSchema as ActivitySessionMaxAggregateInputObjectSchema } from './objects/ActivitySessionMaxAggregateInput.schema';
import { ActivitySessionAvgAggregateInputObjectSchema as ActivitySessionAvgAggregateInputObjectSchema } from './objects/ActivitySessionAvgAggregateInput.schema';
import { ActivitySessionSumAggregateInputObjectSchema as ActivitySessionSumAggregateInputObjectSchema } from './objects/ActivitySessionSumAggregateInput.schema';

export const ActivitySessionGroupBySchema: z.ZodType<Prisma.ActivitySessionGroupByArgs> = z.object({ where: ActivitySessionWhereInputObjectSchema.optional(), orderBy: z.union([ActivitySessionOrderByWithAggregationInputObjectSchema, ActivitySessionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivitySessionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivitySessionScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivitySessionCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionMinAggregateInputObjectSchema.optional(), _max: ActivitySessionMaxAggregateInputObjectSchema.optional(), _avg: ActivitySessionAvgAggregateInputObjectSchema.optional(), _sum: ActivitySessionSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionGroupByArgs>;

export const ActivitySessionGroupByZodSchema = z.object({ where: ActivitySessionWhereInputObjectSchema.optional(), orderBy: z.union([ActivitySessionOrderByWithAggregationInputObjectSchema, ActivitySessionOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ActivitySessionScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ActivitySessionScalarFieldEnumSchema), _count: z.union([ z.literal(true), ActivitySessionCountAggregateInputObjectSchema ]).optional(), _min: ActivitySessionMinAggregateInputObjectSchema.optional(), _max: ActivitySessionMaxAggregateInputObjectSchema.optional(), _avg: ActivitySessionAvgAggregateInputObjectSchema.optional(), _sum: ActivitySessionSumAggregateInputObjectSchema.optional() }).strict();