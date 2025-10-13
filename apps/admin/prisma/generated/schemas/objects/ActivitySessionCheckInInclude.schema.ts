// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { ActivitySessionArgsObjectSchema as ActivitySessionArgsObjectSchema } from './ActivitySessionArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  activitySession: z.union([z.boolean(), z.lazy(() => ActivitySessionArgsObjectSchema)]).optional(),
  member: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional()
}).strict();
export const ActivitySessionCheckInIncludeObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInInclude> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInInclude>;
export const ActivitySessionCheckInIncludeObjectZodSchema = makeSchema();
