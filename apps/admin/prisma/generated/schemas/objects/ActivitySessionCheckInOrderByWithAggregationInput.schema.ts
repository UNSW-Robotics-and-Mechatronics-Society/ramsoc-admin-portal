// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActivitySessionCheckInCountOrderByAggregateInputObjectSchema as ActivitySessionCheckInCountOrderByAggregateInputObjectSchema } from './ActivitySessionCheckInCountOrderByAggregateInput.schema';
import { ActivitySessionCheckInMaxOrderByAggregateInputObjectSchema as ActivitySessionCheckInMaxOrderByAggregateInputObjectSchema } from './ActivitySessionCheckInMaxOrderByAggregateInput.schema';
import { ActivitySessionCheckInMinOrderByAggregateInputObjectSchema as ActivitySessionCheckInMinOrderByAggregateInputObjectSchema } from './ActivitySessionCheckInMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  activitySessionId: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  checkInTime: SortOrderSchema.optional(),
  _count: z.lazy(() => ActivitySessionCheckInCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActivitySessionCheckInMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActivitySessionCheckInMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInOrderByWithAggregationInput>;
export const ActivitySessionCheckInOrderByWithAggregationInputObjectZodSchema = makeSchema();
