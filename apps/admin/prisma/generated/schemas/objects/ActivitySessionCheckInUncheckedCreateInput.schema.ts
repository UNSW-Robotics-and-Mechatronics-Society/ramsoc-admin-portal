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
export const ActivitySessionCheckInUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUncheckedCreateInput>;
export const ActivitySessionCheckInUncheckedCreateInputObjectZodSchema = makeSchema();
