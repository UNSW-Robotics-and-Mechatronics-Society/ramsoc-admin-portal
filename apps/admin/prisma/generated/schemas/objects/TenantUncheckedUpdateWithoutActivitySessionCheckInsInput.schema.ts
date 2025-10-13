// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as TenantMemberUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { EventUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as EventUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ActivityUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as ActivityUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ActivitySessionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema as ActivitySessionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ActivitySessionUncheckedUpdateManyWithoutTenantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  logo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  siteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantMembers: z.lazy(() => TenantMemberUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedUpdateWithoutActivitySessionCheckInsInput>;
export const TenantUncheckedUpdateWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
