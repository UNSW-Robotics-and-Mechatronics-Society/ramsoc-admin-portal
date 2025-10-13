// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './ActivityTypeSelect.schema';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './ActivityTypeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivityTypeSelectObjectSchema).optional(),
  include: z.lazy(() => ActivityTypeIncludeObjectSchema).optional()
}).strict();
export const ActivityTypeArgsObjectSchema = makeSchema();
export const ActivityTypeArgsObjectZodSchema = makeSchema();
