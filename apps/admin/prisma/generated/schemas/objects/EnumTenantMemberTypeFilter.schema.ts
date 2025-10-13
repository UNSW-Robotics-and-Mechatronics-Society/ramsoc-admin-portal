// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { NestedEnumTenantMemberTypeFilterObjectSchema as NestedEnumTenantMemberTypeFilterObjectSchema } from './NestedEnumTenantMemberTypeFilter.schema'

const makeSchema = () => z.object({
  equals: TenantMemberTypeSchema.optional(),
  in: TenantMemberTypeSchema.array().optional(),
  notIn: TenantMemberTypeSchema.array().optional(),
  not: z.union([TenantMemberTypeSchema, z.lazy(() => NestedEnumTenantMemberTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumTenantMemberTypeFilterObjectSchema: z.ZodType<Prisma.EnumTenantMemberTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTenantMemberTypeFilter>;
export const EnumTenantMemberTypeFilterObjectZodSchema = makeSchema();
