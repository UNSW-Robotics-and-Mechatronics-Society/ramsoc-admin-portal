// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TenantMemberOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TenantMemberOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberOrderByRelationAggregateInput>;
export const TenantMemberOrderByRelationAggregateInputObjectZodSchema = makeSchema();
