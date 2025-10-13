// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTenantMemberTypeFilterObjectSchema as NestedEnumTenantMemberTypeFilterObjectSchema } from './NestedEnumTenantMemberTypeFilter.schema'

const nestedenumtenantmembertypewithaggregatesfilterSchema = z.object({
  equals: TenantMemberTypeSchema.optional(),
  in: TenantMemberTypeSchema.array().optional(),
  notIn: TenantMemberTypeSchema.array().optional(),
  not: z.union([TenantMemberTypeSchema, z.lazy(() => NestedEnumTenantMemberTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTenantMemberTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTenantMemberTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumTenantMemberTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTenantMemberTypeWithAggregatesFilter> = nestedenumtenantmembertypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTenantMemberTypeWithAggregatesFilter>;
export const NestedEnumTenantMemberTypeWithAggregatesFilterObjectZodSchema = nestedenumtenantmembertypewithaggregatesfilterSchema;
