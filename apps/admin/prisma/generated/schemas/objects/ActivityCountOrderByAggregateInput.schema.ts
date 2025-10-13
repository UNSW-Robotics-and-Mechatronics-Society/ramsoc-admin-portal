// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional()
}).strict();
export const ActivityCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivityCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCountOrderByAggregateInput>;
export const ActivityCountOrderByAggregateInputObjectZodSchema = makeSchema();
