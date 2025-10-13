// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  capacity: SortOrderSchema.optional()
}).strict();
export const ActivitySessionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionAvgOrderByAggregateInput>;
export const ActivitySessionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
