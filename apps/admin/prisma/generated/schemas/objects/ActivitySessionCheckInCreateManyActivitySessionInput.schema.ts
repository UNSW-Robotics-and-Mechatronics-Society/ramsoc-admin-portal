// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  memberId: z.string(),
  checkInTime: z.coerce.date().optional()
}).strict();
export const ActivitySessionCheckInCreateManyActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyActivitySessionInput>;
export const ActivitySessionCheckInCreateManyActivitySessionInputObjectZodSchema = makeSchema();
