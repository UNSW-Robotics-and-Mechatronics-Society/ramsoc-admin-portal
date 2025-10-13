// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  visibility: z.literal(true).optional(),
  createDate: z.literal(true).optional(),
  updateDate: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ActivityCountAggregateInputObjectSchema: z.ZodType<Prisma.ActivityCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCountAggregateInputType>;
export const ActivityCountAggregateInputObjectZodSchema = makeSchema();
