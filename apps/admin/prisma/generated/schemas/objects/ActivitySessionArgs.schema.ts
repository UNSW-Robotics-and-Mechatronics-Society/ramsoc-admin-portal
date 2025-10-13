// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './ActivitySessionSelect.schema';
import { ActivitySessionIncludeObjectSchema as ActivitySessionIncludeObjectSchema } from './ActivitySessionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ActivitySessionSelectObjectSchema).optional(),
  include: z.lazy(() => ActivitySessionIncludeObjectSchema).optional()
}).strict();
export const ActivitySessionArgsObjectSchema = makeSchema();
export const ActivitySessionArgsObjectZodSchema = makeSchema();
