// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema'

const makeSchema = () => z.object({
  set: VisibilitySchema.optional()
}).strict();
export const EnumVisibilityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumVisibilityFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumVisibilityFieldUpdateOperationsInput>;
export const EnumVisibilityFieldUpdateOperationsInputObjectZodSchema = makeSchema();
