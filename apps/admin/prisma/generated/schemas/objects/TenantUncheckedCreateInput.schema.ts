// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema as TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateNestedManyWithoutTenantInput.schema';
import { EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema as EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  logo: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  tenantMembers: z.lazy(() => TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  activities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  activitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInUncheckedCreateNestedManyWithoutTenantInputObjectSchema)
}).strict();
export const TenantUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateInput>;
export const TenantUncheckedCreateInputObjectZodSchema = makeSchema();
