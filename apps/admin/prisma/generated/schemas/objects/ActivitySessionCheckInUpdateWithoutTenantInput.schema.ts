// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema as ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema } from './ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInput.schema';
import { TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema as TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema } from './TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkInTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  activitySession: z.lazy(() => ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema).optional(),
  member: z.lazy(() => TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInUpdateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateWithoutTenantInput>;
export const ActivitySessionCheckInUpdateWithoutTenantInputObjectZodSchema = makeSchema();
