// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema as TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInput.schema';
import { ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema as ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema } from './ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkInTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema).optional(),
  activitySession: z.lazy(() => ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateWithoutMemberInput>;
export const ActivitySessionCheckInUpdateWithoutMemberInputObjectZodSchema = makeSchema();
