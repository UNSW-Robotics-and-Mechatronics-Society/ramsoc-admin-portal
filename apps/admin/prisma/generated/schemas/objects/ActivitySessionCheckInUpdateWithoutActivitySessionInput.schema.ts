// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema as TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema } from './TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInput.schema';
import { TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema as TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema } from './TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  checkInTime: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenant: z.lazy(() => TenantUpdateOneRequiredWithoutActivitySessionCheckInsNestedInputObjectSchema).optional(),
  member: z.lazy(() => TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema).optional()
}).strict();
export const ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateWithoutActivitySessionInput>;
export const ActivitySessionCheckInUpdateWithoutActivitySessionInputObjectZodSchema = makeSchema();
