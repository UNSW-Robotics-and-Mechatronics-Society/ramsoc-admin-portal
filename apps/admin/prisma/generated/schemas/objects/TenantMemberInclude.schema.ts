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
export const TenantMemberIncludeObjectSchema: z.ZodType<Prisma.TenantMemberInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberInclude>;
export const TenantMemberIncludeObjectZodSchema = makeSchema();
