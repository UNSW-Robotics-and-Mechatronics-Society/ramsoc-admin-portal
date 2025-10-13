// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  activitySessionId: z.string(),
  memberId: z.string(),
  checkInTime: z.coerce.date().optional()
}).strict();
export const ActivitySessionCheckInCreateManyTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyTenantInput>;
export const ActivitySessionCheckInCreateManyTenantInputObjectZodSchema = makeSchema();
