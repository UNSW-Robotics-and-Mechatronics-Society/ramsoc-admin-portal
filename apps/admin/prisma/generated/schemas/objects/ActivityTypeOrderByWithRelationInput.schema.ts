// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActivityOrderByRelationAggregateInputObjectSchema as ActivityOrderByRelationAggregateInputObjectSchema } from './ActivityOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  activities: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ActivityTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ActivityTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeOrderByWithRelationInput>;
export const ActivityTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
