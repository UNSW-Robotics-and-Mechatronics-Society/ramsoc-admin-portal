// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActivityCountOrderByAggregateInputObjectSchema as ActivityCountOrderByAggregateInputObjectSchema } from './ActivityCountOrderByAggregateInput.schema';
import { ActivityMaxOrderByAggregateInputObjectSchema as ActivityMaxOrderByAggregateInputObjectSchema } from './ActivityMaxOrderByAggregateInput.schema';
import { ActivityMinOrderByAggregateInputObjectSchema as ActivityMinOrderByAggregateInputObjectSchema } from './ActivityMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  eventId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  visibility: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ActivityCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActivityMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActivityMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActivityOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActivityOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityOrderByWithAggregationInput>;
export const ActivityOrderByWithAggregationInputObjectZodSchema = makeSchema();
