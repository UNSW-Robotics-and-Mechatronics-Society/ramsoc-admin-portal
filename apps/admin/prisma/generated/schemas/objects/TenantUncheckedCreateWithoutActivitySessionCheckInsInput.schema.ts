// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema as TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateNestedManyWithoutTenantInput.schema';
import { EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema as EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  logo: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  tenantMembers: z.lazy(() => TenantMemberUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedCreateWithoutActivitySessionCheckInsInput>;
export const TenantUncheckedCreateWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
