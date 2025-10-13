// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema'

const makeSchema = () => z.object({
  set: SessionCodeTypeSchema.optional()
}).strict();
export const EnumSessionCodeTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSessionCodeTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSessionCodeTypeFieldUpdateOperationsInput>;
export const EnumSessionCodeTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
