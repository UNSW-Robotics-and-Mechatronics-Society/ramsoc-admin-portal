// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema'

const makeSchema = () => z.object({
  set: TenantMemberTypeSchema.optional()
}).strict();
export const EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTenantMemberTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTenantMemberTypeFieldUpdateOperationsInput>;
export const EnumTenantMemberTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
