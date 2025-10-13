// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeCountOutputTypeSelectObjectSchema as ActivityTypeCountOutputTypeSelectObjectSchema } from './ActivityTypeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivityTypeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ActivityTypeCountOutputTypeArgsObjectSchema = makeSchema();
export const ActivityTypeCountOutputTypeArgsObjectZodSchema = makeSchema();
