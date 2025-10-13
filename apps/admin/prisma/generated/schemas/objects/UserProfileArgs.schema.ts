// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './UserProfileSelect.schema';
import { UserProfileIncludeObjectSchema as UserProfileIncludeObjectSchema } from './UserProfileInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserProfileSelectObjectSchema).optional(),
  include: z.lazy(() => UserProfileIncludeObjectSchema).optional()
}).strict();
export const UserProfileArgsObjectSchema = makeSchema();
export const UserProfileArgsObjectZodSchema = makeSchema();
