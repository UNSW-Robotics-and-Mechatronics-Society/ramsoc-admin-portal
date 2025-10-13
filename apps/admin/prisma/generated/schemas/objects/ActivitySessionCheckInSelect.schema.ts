// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { ActivitySessionArgsObjectSchema as ActivitySessionArgsObjectSchema } from './ActivitySessionArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  activitySessionId: z.boolean().optional(),
  memberId: z.boolean().optional(),
  checkInTime: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  activitySession: z.union([z.boolean(), z.lazy(() => ActivitySessionArgsObjectSchema)]).optional(),
  member: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional()
}).strict();
export const ActivitySessionCheckInSelectObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInSelect>;
export const ActivitySessionCheckInSelectObjectZodSchema = makeSchema();
