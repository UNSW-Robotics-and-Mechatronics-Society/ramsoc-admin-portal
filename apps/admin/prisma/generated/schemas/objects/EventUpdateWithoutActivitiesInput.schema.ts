// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { EnumVisibilityFieldUpdateOperationsInputObjectSchema as EnumVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumVisibilityFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutEventsNestedInputObjectSchema as TenantUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutEventsNestedInput.schema';
import { TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema as TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema } from './TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInput.schema';
import { TenantMemberUpdateOneWithoutUpdatedEventsNestedInputObjectSchema as TenantMemberUpdateOneWithoutUpdatedEventsNestedInputObjectSchema } from './TenantMemberUpdateOneWithoutUpdatedEventsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  coverImageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  siteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  visibility: z.union([VisibilitySchema, z.lazy(() => EnumVisibilityFieldUpdateOperationsInputObjectSchema)]).optional(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutEventsNestedInputObjectSchema).optional(),
  createdBy: z.lazy(() => TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema).optional(),
  updatedBy: z.lazy(() => TenantMemberUpdateOneWithoutUpdatedEventsNestedInputObjectSchema).optional()
}).strict();
export const EventUpdateWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventUpdateWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithoutActivitiesInput>;
export const EventUpdateWithoutActivitiesInputObjectZodSchema = makeSchema();
