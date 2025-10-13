// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityFindManySchema as ActivityFindManySchema } from '../findManyActivity.schema';
import { ActivityTypeCountOutputTypeArgsObjectSchema as ActivityTypeCountOutputTypeArgsObjectSchema } from './ActivityTypeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  activities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActivityTypeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActivityTypeIncludeObjectSchema: z.ZodType<Prisma.ActivityTypeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeInclude>;
export const ActivityTypeIncludeObjectZodSchema = makeSchema();
