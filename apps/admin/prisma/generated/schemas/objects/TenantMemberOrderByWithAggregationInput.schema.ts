// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TenantMemberCountOrderByAggregateInputObjectSchema as TenantMemberCountOrderByAggregateInputObjectSchema } from './TenantMemberCountOrderByAggregateInput.schema';
import { TenantMemberMaxOrderByAggregateInputObjectSchema as TenantMemberMaxOrderByAggregateInputObjectSchema } from './TenantMemberMaxOrderByAggregateInput.schema';
import { TenantMemberMinOrderByAggregateInputObjectSchema as TenantMemberMinOrderByAggregateInputObjectSchema } from './TenantMemberMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional(),
  _count: z.lazy(() => TenantMemberCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TenantMemberMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TenantMemberMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TenantMemberOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TenantMemberOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberOrderByWithAggregationInput>;
export const TenantMemberOrderByWithAggregationInputObjectZodSchema = makeSchema();
