// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional()
}).strict();
export const ActivityTypeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivityTypeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCountOrderByAggregateInput>;
export const ActivityTypeCountOrderByAggregateInputObjectZodSchema = makeSchema();
