// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  slug: SortOrderSchema.optional(),
  logo: SortOrderSchema.optional(),
  siteUrl: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createDate: SortOrderSchema.optional(),
  updateDate: SortOrderSchema.optional()
}).strict();
export const TenantMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TenantMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMaxOrderByAggregateInput>;
export const TenantMaxOrderByAggregateInputObjectZodSchema = makeSchema();
