// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  activityId: z.literal(true).optional(),
  visibility: z.literal(true).optional(),
  startTime: z.literal(true).optional(),
  endTime: z.literal(true).optional(),
  location: z.literal(true).optional(),
  capacity: z.literal(true).optional(),
  codeType: z.literal(true).optional(),
  code: z.literal(true).optional(),
  codeValidFrom: z.literal(true).optional(),
  codeValidTo: z.literal(true).optional(),
  createDate: z.literal(true).optional(),
  updateDate: z.literal(true).optional(),
  createdById: z.literal(true).optional(),
  updatedById: z.literal(true).optional(),
  allowSelfCheckIn: z.literal(true).optional()
}).strict();
export const ActivitySessionMinAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionMinAggregateInputType>;
export const ActivitySessionMinAggregateInputObjectZodSchema = makeSchema();
