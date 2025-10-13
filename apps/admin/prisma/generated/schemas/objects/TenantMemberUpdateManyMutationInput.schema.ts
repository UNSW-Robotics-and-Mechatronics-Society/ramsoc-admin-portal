// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema as EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema } from './EnumTenantMemberTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([TenantMemberTypeSchema, z.lazy(() => EnumTenantMemberTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updateDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateManyMutationInput>;
export const TenantMemberUpdateManyMutationInputObjectZodSchema = makeSchema();
