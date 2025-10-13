// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCountOutputTypeSelectObjectSchema as TenantMemberCountOutputTypeSelectObjectSchema } from './TenantMemberCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantMemberCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TenantMemberCountOutputTypeArgsObjectSchema = makeSchema();
export const TenantMemberCountOutputTypeArgsObjectZodSchema = makeSchema();
