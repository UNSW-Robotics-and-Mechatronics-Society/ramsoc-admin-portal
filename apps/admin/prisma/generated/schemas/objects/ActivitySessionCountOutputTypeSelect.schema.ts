// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  checkIns: z.boolean().optional()
}).strict();
export const ActivitySessionCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ActivitySessionCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCountOutputTypeSelect>;
export const ActivitySessionCountOutputTypeSelectObjectZodSchema = makeSchema();
