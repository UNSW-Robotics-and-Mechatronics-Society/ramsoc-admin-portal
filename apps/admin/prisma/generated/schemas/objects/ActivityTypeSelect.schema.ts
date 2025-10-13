// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityFindManySchema as ActivityFindManySchema } from '../findManyActivity.schema';
import { ActivityTypeCountOutputTypeArgsObjectSchema as ActivityTypeCountOutputTypeArgsObjectSchema } from './ActivityTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  activities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActivityTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActivityTypeSelectObjectSchema: z.ZodType<Prisma.ActivityTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeSelect>;
export const ActivityTypeSelectObjectZodSchema = makeSchema();
