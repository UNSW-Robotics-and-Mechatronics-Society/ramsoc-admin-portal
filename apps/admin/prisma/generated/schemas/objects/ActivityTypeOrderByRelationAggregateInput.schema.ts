// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ActivityTypeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ActivityTypeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeOrderByRelationAggregateInput>;
export const ActivityTypeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
