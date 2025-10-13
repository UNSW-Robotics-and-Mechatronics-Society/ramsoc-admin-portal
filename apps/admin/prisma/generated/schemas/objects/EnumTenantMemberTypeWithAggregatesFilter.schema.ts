// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { NestedEnumTenantMemberTypeWithAggregatesFilterObjectSchema as NestedEnumTenantMemberTypeWithAggregatesFilterObjectSchema } from './NestedEnumTenantMemberTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTenantMemberTypeFilterObjectSchema as NestedEnumTenantMemberTypeFilterObjectSchema } from './NestedEnumTenantMemberTypeFilter.schema'

const makeSchema = () => z.object({
  equals: TenantMemberTypeSchema.optional(),
  in: TenantMemberTypeSchema.array().optional(),
  notIn: TenantMemberTypeSchema.array().optional(),
  not: z.union([TenantMemberTypeSchema, z.lazy(() => NestedEnumTenantMemberTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTenantMemberTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTenantMemberTypeFilterObjectSchema).optional()
}).strict();
export const EnumTenantMemberTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTenantMemberTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTenantMemberTypeWithAggregatesFilter>;
export const EnumTenantMemberTypeWithAggregatesFilterObjectZodSchema = makeSchema();
