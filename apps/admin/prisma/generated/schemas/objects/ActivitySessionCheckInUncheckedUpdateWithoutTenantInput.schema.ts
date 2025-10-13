// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  activitySessionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkInTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateWithoutTenantInput>;
export const ActivitySessionCheckInUncheckedUpdateWithoutTenantInputObjectZodSchema = makeSchema();
