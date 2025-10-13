// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  activitySessionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkInTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInput>;
export const ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInputObjectZodSchema = makeSchema();
