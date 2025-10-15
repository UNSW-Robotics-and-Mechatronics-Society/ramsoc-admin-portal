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
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  logo: z.boolean().optional(),
  siteUrl: z.boolean().optional(),
  description: z.boolean().optional(),
  createDate: z.boolean().optional(),
  updateDate: z.boolean().optional(),
  tenantMembers: z.union([z.boolean(), z.lazy(() => TenantMemberFindManySchema)]).optional(),
  events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  activities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  activitySessions: z.union([z.boolean(), z.lazy(() => ActivitySessionFindManySchema)]).optional(),
  activitySessionCheckIns: z.union([z.boolean(), z.lazy(() => ActivitySessionCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantSelectObjectSchema: z.ZodType<Prisma.TenantSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantSelect>;
export const TenantSelectObjectZodSchema = makeSchema();
