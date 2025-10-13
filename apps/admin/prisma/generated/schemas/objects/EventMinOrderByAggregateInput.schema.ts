// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tenantId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  coverImageUrl: SortOrderSchema.optional(),
  siteUrl: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  visibility: SortOrderSchema.optional(),
  createdById: SortOrderSchema.optional(),
  updatedById: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional()
}).strict();
export const EventMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventMinOrderByAggregateInput>;
export const EventMinOrderByAggregateInputObjectZodSchema = makeSchema();
