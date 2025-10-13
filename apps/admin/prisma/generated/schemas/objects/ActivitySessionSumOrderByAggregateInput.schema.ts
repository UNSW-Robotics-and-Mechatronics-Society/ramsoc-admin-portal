// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  capacity: SortOrderSchema.optional()
}).strict();
export const ActivitySessionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionSumOrderByAggregateInput>;
export const ActivitySessionSumOrderByAggregateInputObjectZodSchema = makeSchema();
