// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { ActivityFindManySchema as ActivityFindManySchema } from '../findManyActivity.schema';
import { ActivitySessionFindManySchema as ActivitySessionFindManySchema } from '../findManyActivitySession.schema';
import { ActivitySessionCheckInFindManySchema as ActivitySessionCheckInFindManySchema } from '../findManyActivitySessionCheckIn.schema';
import { TenantMemberCountOutputTypeArgsObjectSchema as TenantMemberCountOutputTypeArgsObjectSchema } from './TenantMemberCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createDate: z.boolean().optional(),
  updateDate: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdEvents: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  updatedEvents: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  createdActivities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  updatedActivities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  createdActivitySessions: z.union([z.boolean(), z.lazy(() => ActivitySessionFindManySchema)]).optional(),
  updatedActivitySessions: z.union([z.boolean(), z.lazy(() => ActivitySessionFindManySchema)]).optional(),
  ActivitySessionCheckIn: z.union([z.boolean(), z.lazy(() => ActivitySessionCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantMemberCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantMemberSelectObjectSchema: z.ZodType<Prisma.TenantMemberSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberSelect>;
export const TenantMemberSelectObjectZodSchema = makeSchema();
