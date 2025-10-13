// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: TenantMemberTypeSchema.optional(),
  isActive: z.boolean().optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional()
}).strict();
export const TenantMemberCreateManyTenantInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateManyTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateManyTenantInput>;
export const TenantMemberCreateManyTenantInputObjectZodSchema = makeSchema();
