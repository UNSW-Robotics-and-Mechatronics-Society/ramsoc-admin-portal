// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema as EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema } from './EnumTenantMemberTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutTenantMembersNestedInputObjectSchema as TenantUpdateOneRequiredWithoutTenantMembersNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutTenantMembersNestedInput.schema';
import { EventUpdateManyWithoutCreatedByNestedInputObjectSchema as EventUpdateManyWithoutCreatedByNestedInputObjectSchema } from './EventUpdateManyWithoutCreatedByNestedInput.schema';
import { EventUpdateManyWithoutUpdatedByNestedInputObjectSchema as EventUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './EventUpdateManyWithoutUpdatedByNestedInput.schema';
import { ActivityUpdateManyWithoutCreatedByNestedInputObjectSchema as ActivityUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ActivityUpdateManyWithoutCreatedByNestedInput.schema';
import { ActivityUpdateManyWithoutUpdatedByNestedInputObjectSchema as ActivityUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ActivityUpdateManyWithoutUpdatedByNestedInput.schema';
import { ActivitySessionUpdateManyWithoutCreatedByNestedInputObjectSchema as ActivitySessionUpdateManyWithoutCreatedByNestedInputObjectSchema } from './ActivitySessionUpdateManyWithoutCreatedByNestedInput.schema';
import { ActivitySessionUpdateManyWithoutUpdatedByNestedInputObjectSchema as ActivitySessionUpdateManyWithoutUpdatedByNestedInputObjectSchema } from './ActivitySessionUpdateManyWithoutUpdatedByNestedInput.schema';
import { ActivitySessionCheckInUpdateManyWithoutMemberNestedInputObjectSchema as ActivitySessionCheckInUpdateManyWithoutMemberNestedInputObjectSchema } from './ActivitySessionCheckInUpdateManyWithoutMemberNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([TenantMemberTypeSchema, z.lazy(() => EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutTenantMembersNestedInputObjectSchema).optional(),
  createdEvents: z.lazy(() => EventUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  updatedEvents: z.lazy(() => EventUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  createdActivities: z.lazy(() => ActivityUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  updatedActivities: z.lazy(() => ActivityUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  createdActivitySessions: z.lazy(() => ActivitySessionUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
  updatedActivitySessions: z.lazy(() => ActivitySessionUpdateManyWithoutUpdatedByNestedInputObjectSchema).optional(),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInUpdateManyWithoutMemberNestedInputObjectSchema).optional()
}).strict();
export const TenantMemberUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateWithoutUserInput>;
export const TenantMemberUpdateWithoutUserInputObjectZodSchema = makeSchema();
