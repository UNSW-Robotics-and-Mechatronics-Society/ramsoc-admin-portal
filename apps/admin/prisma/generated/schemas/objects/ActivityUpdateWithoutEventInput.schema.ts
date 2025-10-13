// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutActivitiesNestedInputObjectSchema as TenantUpdateOneRequiredWithoutActivitiesNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutActivitiesNestedInput.schema';
import { TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInputObjectSchema as TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInputObjectSchema } from './TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInput.schema';
import { TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInputObjectSchema as TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInputObjectSchema } from './TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInput.schema';
import { ActivityTypeUpdateManyWithoutActivitiesNestedInputObjectSchema as ActivityTypeUpdateManyWithoutActivitiesNestedInputObjectSchema } from './ActivityTypeUpdateManyWithoutActivitiesNestedInput.schema';
import { ActivitySessionUpdateManyWithoutActivityNestedInputObjectSchema as ActivitySessionUpdateManyWithoutActivityNestedInputObjectSchema } from './ActivitySessionUpdateManyWithoutActivityNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutActivitiesNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInputObjectSchema).optional(),
  types: z.lazy(() => ActivityTypeUpdateManyWithoutActivitiesNestedInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionUpdateManyWithoutActivityNestedInputObjectSchema).optional()
}).strict();
export const ActivityUpdateWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityUpdateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateWithoutEventInput>;
export const ActivityUpdateWithoutEventInputObjectZodSchema = makeSchema();
