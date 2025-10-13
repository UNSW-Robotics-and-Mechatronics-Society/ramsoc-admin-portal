// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  activitySessionId: z.string(),
  memberId: z.string(),
  checkInTime: z.coerce.date().optional()
}).strict();
export const ActivitySessionCheckInCreateManyInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyInput>;
export const ActivitySessionCheckInCreateManyInputObjectZodSchema = makeSchema();
