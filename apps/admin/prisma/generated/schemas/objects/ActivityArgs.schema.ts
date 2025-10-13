// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './ActivitySelect.schema';
import { ActivityIncludeObjectSchema as ActivityIncludeObjectSchema } from './ActivityInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivitySelectObjectSchema).optional(),
  include: z.lazy(() => ActivityIncludeObjectSchema).optional()
}).strict();
export const ActivityArgsObjectSchema = makeSchema();
export const ActivityArgsObjectZodSchema = makeSchema();
