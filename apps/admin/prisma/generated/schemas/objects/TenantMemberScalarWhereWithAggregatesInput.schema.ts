// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTenantMemberTypeWithAggregatesFilterObjectSchema as EnumTenantMemberTypeWithAggregatesFilterObjectSchema } from './EnumTenantMemberTypeWithAggregatesFilter.schema';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tenantmemberscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantMemberScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantMemberScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantMemberScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumTenantMemberTypeWithAggregatesFilterObjectSchema), TenantMemberTypeSchema]).optional(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TenantMemberScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantMemberScalarWhereWithAggregatesInput> = tenantmemberscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantMemberScalarWhereWithAggregatesInput>;
export const TenantMemberScalarWhereWithAggregatesInputObjectZodSchema = tenantmemberscalarwherewithaggregatesinputSchema;
