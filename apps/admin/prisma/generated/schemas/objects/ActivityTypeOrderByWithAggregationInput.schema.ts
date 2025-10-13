// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActivityTypeCountOrderByAggregateInputObjectSchema as ActivityTypeCountOrderByAggregateInputObjectSchema } from './ActivityTypeCountOrderByAggregateInput.schema';
import { ActivityTypeMaxOrderByAggregateInputObjectSchema as ActivityTypeMaxOrderByAggregateInputObjectSchema } from './ActivityTypeMaxOrderByAggregateInput.schema';
import { ActivityTypeMinOrderByAggregateInputObjectSchema as ActivityTypeMinOrderByAggregateInputObjectSchema } from './ActivityTypeMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ActivityTypeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActivityTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActivityTypeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActivityTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActivityTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeOrderByWithAggregationInput>;
export const ActivityTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
