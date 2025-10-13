// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  activities: z.boolean().optional()
}).strict();
export const ActivityTypeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ActivityTypeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeCountOutputTypeSelect>;
export const ActivityTypeCountOutputTypeSelectObjectZodSchema = makeSchema();
