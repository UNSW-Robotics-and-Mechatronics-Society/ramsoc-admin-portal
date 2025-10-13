// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  activityId: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  startTime: SortOrderSchema.optional(),
  endTime: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  codeType: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  codeValidFrom: SortOrderSchema.optional(),
  codeValidTo: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  allowSelfCheckIn: SortOrderSchema.optional()
}).strict();
export const ActivitySessionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionMinOrderByAggregateInput>;
export const ActivitySessionMinOrderByAggregateInputObjectZodSchema = makeSchema();
