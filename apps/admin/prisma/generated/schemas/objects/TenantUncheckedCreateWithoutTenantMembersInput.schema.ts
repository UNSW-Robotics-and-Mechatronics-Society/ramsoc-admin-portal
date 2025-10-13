// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
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
  updateDate: z.coerce.date().optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantUncheckedCreateWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateWithoutTenantMembersInput>;
export const TenantUncheckedCreateWithoutTenantMembersInputObjectZodSchema = makeSchema();
