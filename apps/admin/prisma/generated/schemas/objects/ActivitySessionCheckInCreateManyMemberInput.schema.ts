// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  activitySessionId: z.string(),
  checkInTime: z.coerce.date().optional()
}).strict();
export const ActivitySessionCheckInCreateManyMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyMemberInput>;
export const ActivitySessionCheckInCreateManyMemberInputObjectZodSchema = makeSchema();
