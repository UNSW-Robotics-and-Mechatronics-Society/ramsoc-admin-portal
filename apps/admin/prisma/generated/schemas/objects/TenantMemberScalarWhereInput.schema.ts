// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTenantMemberTypeFilterObjectSchema as EnumTenantMemberTypeFilterObjectSchema } from './EnumTenantMemberTypeFilter.schema';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tenantmemberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantMemberScalarWhereInputObjectSchema), z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantMemberScalarWhereInputObjectSchema), z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumTenantMemberTypeFilterObjectSchema), TenantMemberTypeSchema]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TenantMemberScalarWhereInputObjectSchema: z.ZodType<Prisma.TenantMemberScalarWhereInput> = tenantmemberscalarwhereinputSchema as unknown as z.ZodType<Prisma.TenantMemberScalarWhereInput>;
export const TenantMemberScalarWhereInputObjectZodSchema = tenantmemberscalarwhereinputSchema;
