// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ActivityUpdateManyWithoutTypesNestedInputObjectSchema as ActivityUpdateManyWithoutTypesNestedInputObjectSchema } from './ActivityUpdateManyWithoutTypesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activities: z.lazy(() => ActivityUpdateManyWithoutTypesNestedInputObjectSchema).optional()
}).strict();
export const ActivityTypeUpdateInputObjectSchema: z.ZodType<Prisma.ActivityTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityTypeUpdateInput>;
export const ActivityTypeUpdateInputObjectZodSchema = makeSchema();
