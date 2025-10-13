// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  slug: z.literal(true).optional(),
  coverImageUrl: z.literal(true).optional(),
  siteUrl: z.literal(true).optional(),
  description: z.literal(true).optional(),
  visibility: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  createDate: z.literal(true).optional(),
  updateDate: z.literal(true).optional()
}).strict();
export const EventMinAggregateInputObjectSchema: z.ZodType<Prisma.EventMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventMinAggregateInputType>;
export const EventMinAggregateInputObjectZodSchema = makeSchema();
