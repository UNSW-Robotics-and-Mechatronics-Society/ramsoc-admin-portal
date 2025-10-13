// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema as TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInput.schema';
import { ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema as ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema } from './ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInput.schema';
import { TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema as TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema } from './TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkInTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema).optional(),
  activitySession: z.lazy(() => ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema).optional(),
  member: z.lazy(() => TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInUpdateInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateInput>;
export const ActivitySessionCheckInUpdateInputObjectZodSchema = makeSchema();
