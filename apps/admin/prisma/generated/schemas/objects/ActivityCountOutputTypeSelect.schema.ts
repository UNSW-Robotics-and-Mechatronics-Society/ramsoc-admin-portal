// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  types: z.boolean().optional(),
  activitySessions: z.boolean().optional()
}).strict();
export const ActivityCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ActivityCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCountOutputTypeSelect>;
export const ActivityCountOutputTypeSelectObjectZodSchema = makeSchema();
