// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionOrderByWithRelationInputObjectSchema as ActivitySessionOrderByWithRelationInputObjectSchema } from './objects/ActivitySessionOrderByWithRelationInput.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './objects/ActivitySessionWhereInput.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './objects/ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCountAggregateInputObjectSchema as ActivitySessionCountAggregateInputObjectSchema } from './objects/ActivitySessionCountAggregateInput.schema';

export const ActivitySessionCountSchema: z.ZodType<Prisma.ActivitySessionCountArgs> = z.object({ orderBy: z.union([ActivitySessionOrderByWithRelationInputObjectSchema, ActivitySessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionWhereInputObjectSchema.optional(), cursor: ActivitySessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActivitySessionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCountArgs>;

export const ActivitySessionCountZodSchema = z.object({ orderBy: z.union([ActivitySessionOrderByWithRelationInputObjectSchema, ActivitySessionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ActivitySessionWhereInputObjectSchema.optional(), cursor: ActivitySessionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ActivitySessionCountAggregateInputObjectSchema ]).optional() }).strict();