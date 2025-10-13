// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ActivityUncheckedUpdateManyWithoutTypesNestedInputObjectSchema as ActivityUncheckedUpdateManyWithoutTypesNestedInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutTypesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activities: z.lazy(() => ActivityUncheckedUpdateManyWithoutTypesNestedInputObjectSchema).optional()
}).strict();
export const ActivityTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ActivityTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUncheckedUpdateInput>;
export const ActivityTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
