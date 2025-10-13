// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tenantId: z.literal(true).optional(),
  activitySessionId: z.literal(true).optional(),
  memberId: z.literal(true).optional(),
  checkInTime: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ActivitySessionCheckInCountAggregateInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCountAggregateInputType>;
export const ActivitySessionCheckInCountAggregateInputObjectZodSchema = makeSchema();
