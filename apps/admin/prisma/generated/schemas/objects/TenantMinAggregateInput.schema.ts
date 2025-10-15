// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  logo: z.literal(true).optional(),
  siteUrl: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createDate: z.literal(true).optional(),
  updateDate: z.literal(true).optional()
}).strict();
export const TenantMinAggregateInputObjectSchema: z.ZodType<Prisma.TenantMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TenantMinAggregateInputType>;
export const TenantMinAggregateInputObjectZodSchema = makeSchema();
