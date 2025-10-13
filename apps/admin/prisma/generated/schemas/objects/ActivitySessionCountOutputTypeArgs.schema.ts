// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCountOutputTypeSelectObjectSchema as ActivitySessionCountOutputTypeSelectObjectSchema } from './ActivitySessionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivitySessionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ActivitySessionCountOutputTypeArgsObjectSchema = makeSchema();
export const ActivitySessionCountOutputTypeArgsObjectZodSchema = makeSchema();
