// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './TenantMemberInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantMemberSelectObjectSchema).optional(),
  include: z.lazy(() => TenantMemberIncludeObjectSchema).optional()
}).strict();
export const TenantMemberArgsObjectSchema = makeSchema();
export const TenantMemberArgsObjectZodSchema = makeSchema();
