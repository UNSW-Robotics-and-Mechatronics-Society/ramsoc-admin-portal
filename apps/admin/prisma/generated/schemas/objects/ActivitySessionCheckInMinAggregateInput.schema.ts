// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  activitySessionId: z.literal(true).optional(),
  memberId: z.literal(true).optional(),
  checkInTime: z.literal(true).optional()
}).strict();
export const ActivitySessionCheckInMinAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInMinAggregateInputType>;
export const ActivitySessionCheckInMinAggregateInputObjectZodSchema = makeSchema();
