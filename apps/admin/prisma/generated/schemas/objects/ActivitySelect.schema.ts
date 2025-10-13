// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema';
import { ActivityTypeFindManySchema as ActivityTypeFindManySchema } from '../findManyActivityType.schema';
import { ActivitySessionFindManySchema as ActivitySessionFindManySchema } from '../findManyActivitySession.schema';
import { ActivityCountOutputTypeArgsObjectSchema as ActivityCountOutputTypeArgsObjectSchema } from './ActivityCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  eventId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  visibility: z.boolean().optional(),
  createDate: z.boolean().optional(),
  updateDate: z.boolean().optional(),
  createdById: z.boolean().optional(),
  updatedById: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  types: z.union([z.boolean(), z.lazy(() => ActivityTypeFindManySchema)]).optional(),
  activitySessions: z.union([z.boolean(), z.lazy(() => ActivitySessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActivityCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActivitySelectObjectSchema: z.ZodType<Prisma.ActivitySelect> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySelect>;
export const ActivitySelectObjectZodSchema = makeSchema();
