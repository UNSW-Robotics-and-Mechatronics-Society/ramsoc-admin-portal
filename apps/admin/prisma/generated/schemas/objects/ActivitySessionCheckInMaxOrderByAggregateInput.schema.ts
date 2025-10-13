// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  activitySessionId: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  checkInTime: SortOrderSchema.optional()
}).strict();
export const ActivitySessionCheckInMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInMaxOrderByAggregateInput>;
export const ActivitySessionCheckInMaxOrderByAggregateInputObjectZodSchema = makeSchema();
