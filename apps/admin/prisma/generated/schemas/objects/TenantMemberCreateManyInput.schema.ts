// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  userId: z.string(),
  type: TenantMemberTypeSchema.optional(),
  isActive: z.boolean().optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional()
}).strict();
export const TenantMemberCreateManyInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateManyInput>;
export const TenantMemberCreateManyInputObjectZodSchema = makeSchema();
