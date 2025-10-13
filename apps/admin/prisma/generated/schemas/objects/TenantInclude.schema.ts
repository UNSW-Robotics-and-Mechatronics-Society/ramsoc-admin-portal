// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberFindManySchema as TenantMemberFindManySchema } from '../findManyTenantMember.schema';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { ActivityFindManySchema as ActivityFindManySchema } from '../findManyActivity.schema';
import { ActivitySessionFindManySchema as ActivitySessionFindManySchema } from '../findManyActivitySession.schema';
import { ActivitySessionCheckInFindManySchema as ActivitySessionCheckInFindManySchema } from '../findManyActivitySessionCheckIn.schema';
import { TenantCountOutputTypeArgsObjectSchema as TenantCountOutputTypeArgsObjectSchema } from './TenantCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenantMembers: z.union([z.boolean(), z.lazy(() => TenantMemberFindManySchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  activities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  activitySessions: z.union([z.boolean(), z.lazy(() => ActivitySessionFindManySchema)]).optional(),
  activitySessionCheckIns: z.union([z.boolean(), z.lazy(() => ActivitySessionCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantIncludeObjectSchema: z.ZodType<Prisma.TenantInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantInclude>;
export const TenantIncludeObjectZodSchema = makeSchema();
