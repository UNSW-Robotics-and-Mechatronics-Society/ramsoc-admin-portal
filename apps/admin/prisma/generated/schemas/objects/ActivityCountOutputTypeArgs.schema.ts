// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCountOutputTypeSelectObjectSchema as ActivityCountOutputTypeSelectObjectSchema } from './ActivityCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivityCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ActivityCountOutputTypeArgsObjectSchema = makeSchema();
export const ActivityCountOutputTypeArgsObjectZodSchema = makeSchema();
