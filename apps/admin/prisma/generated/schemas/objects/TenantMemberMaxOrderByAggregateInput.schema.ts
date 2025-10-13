// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional()
}).strict();
export const TenantMemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantMemberMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberMaxOrderByAggregateInput>;
export const TenantMemberMaxOrderByAggregateInputObjectZodSchema = makeSchema();
