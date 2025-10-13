// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActivitySessionCountOrderByAggregateInputObjectSchema as ActivitySessionCountOrderByAggregateInputObjectSchema } from './ActivitySessionCountOrderByAggregateInput.schema';
import { ActivitySessionAvgOrderByAggregateInputObjectSchema as ActivitySessionAvgOrderByAggregateInputObjectSchema } from './ActivitySessionAvgOrderByAggregateInput.schema';
import { ActivitySessionMaxOrderByAggregateInputObjectSchema as ActivitySessionMaxOrderByAggregateInputObjectSchema } from './ActivitySessionMaxOrderByAggregateInput.schema';
import { ActivitySessionMinOrderByAggregateInputObjectSchema as ActivitySessionMinOrderByAggregateInputObjectSchema } from './ActivitySessionMinOrderByAggregateInput.schema';
import { ActivitySessionSumOrderByAggregateInputObjectSchema as ActivitySessionSumOrderByAggregateInputObjectSchema } from './ActivitySessionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  activityId: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  startTime: SortOrderSchema.optional(),
  endTime: SortOrderSchema.optional(),
  location: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  capacity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codeType: SortOrderSchema.optional(),
  code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codeValidFrom: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  codeValidTo: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  allowSelfCheckIn: SortOrderSchema.optional(),
  _count: z.lazy(() => ActivitySessionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ActivitySessionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActivitySessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActivitySessionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ActivitySessionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActivitySessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActivitySessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionOrderByWithAggregationInput>;
export const ActivitySessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
