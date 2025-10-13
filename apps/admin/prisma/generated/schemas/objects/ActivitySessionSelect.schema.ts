// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityArgsObjectSchema as ActivityArgsObjectSchema } from './ActivityArgs.schema';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema';
import { ActivitySessionCheckInFindManySchema as ActivitySessionCheckInFindManySchema } from '../findManyActivitySessionCheckIn.schema';
import { ActivitySessionCountOutputTypeArgsObjectSchema as ActivitySessionCountOutputTypeArgsObjectSchema } from './ActivitySessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  activityId: z.boolean().optional(),
  visibility: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  location: z.boolean().optional(),
  capacity: z.boolean().optional(),
  codeType: z.boolean().optional(),
  code: z.boolean().optional(),
  codeValidFrom: z.boolean().optional(),
  codeValidTo: z.boolean().optional(),
  createDate: z.boolean().optional(),
  updateDate: z.boolean().optional(),
  createdById: z.boolean().optional(),
  updatedById: z.boolean().optional(),
  allowSelfCheckIn: z.boolean().optional(),
  activity: z.union([z.boolean(), z.lazy(() => ActivityArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  checkIns: z.union([z.boolean(), z.lazy(() => ActivitySessionCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActivitySessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActivitySessionSelectObjectSchema: z.ZodType<Prisma.ActivitySessionSelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionSelect>;
export const ActivitySessionSelectObjectZodSchema = makeSchema();
