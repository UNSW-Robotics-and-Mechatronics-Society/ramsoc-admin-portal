// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  activities: z.boolean().optional()
}).strict();
export const EventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOutputTypeSelect>;
export const EventCountOutputTypeSelectObjectZodSchema = makeSchema();
