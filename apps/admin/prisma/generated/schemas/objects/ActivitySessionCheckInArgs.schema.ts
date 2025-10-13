// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInIncludeObjectSchema as ActivitySessionCheckInIncludeObjectSchema } from './ActivitySessionCheckInInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivitySessionCheckInSelectObjectSchema).optional(),
  include: z.lazy(() => ActivitySessionCheckInIncludeObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInArgsObjectSchema = makeSchema();
export const ActivitySessionCheckInArgsObjectZodSchema = makeSchema();
