// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema as EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema } from './EnumTenantMemberTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as EventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { EventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema as EventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './EventUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ActivityUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as ActivityUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema as ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInput.schema';
import { ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema as ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInput.schema';
import { ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInputObjectSchema as ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([TenantMemberTypeSchema, z.lazy(() => EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdEvents: z.lazy(() => EventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  updatedEvents: z.lazy(() => EventUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  createdActivities: z.lazy(() => ActivityUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  createdActivitySessions: z.lazy(() => ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  updatedActivitySessions: z.lazy(() => ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInputObjectSchema).optional()
}).strict();
export const TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInput>;
export const TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectZodSchema = makeSchema();
