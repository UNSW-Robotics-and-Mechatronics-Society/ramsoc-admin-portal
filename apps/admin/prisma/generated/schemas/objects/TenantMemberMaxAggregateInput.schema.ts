// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  createDate: z.literal(true).optional(),
  updateDate: z.literal(true).optional()
}).strict();
export const TenantMemberMaxAggregateInputObjectSchema: z.ZodType<Prisma.TenantMemberMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberMaxAggregateInputType>;
export const TenantMemberMaxAggregateInputObjectZodSchema = makeSchema();
