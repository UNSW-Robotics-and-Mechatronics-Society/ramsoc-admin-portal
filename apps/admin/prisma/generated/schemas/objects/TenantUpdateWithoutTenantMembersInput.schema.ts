// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutTenantNestedInputObjectSchema as EventUpdateManyWithoutTenantNestedInputObjectSchema } from './EventUpdateManyWithoutTenantNestedInput.schema';
import { ActivityUpdateManyWithoutTenantNestedInputObjectSchema as ActivityUpdateManyWithoutTenantNestedInputObjectSchema } from './ActivityUpdateManyWithoutTenantNestedInput.schema';
import { ActivitySessionUpdateManyWithoutTenantNestedInputObjectSchema as ActivitySessionUpdateManyWithoutTenantNestedInputObjectSchema } from './ActivitySessionUpdateManyWithoutTenantNestedInput.schema';
import { ActivitySessionCheckInUpdateManyWithoutTenantNestedInputObjectSchema as ActivitySessionCheckInUpdateManyWithoutTenantNestedInputObjectSchema } from './ActivitySessionCheckInUpdateManyWithoutTenantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  logo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  siteUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  events: z.lazy(() => EventUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUpdateWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.TenantUpdateWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateWithoutTenantMembersInput>;
export const TenantUpdateWithoutTenantMembersInputObjectZodSchema = makeSchema();
