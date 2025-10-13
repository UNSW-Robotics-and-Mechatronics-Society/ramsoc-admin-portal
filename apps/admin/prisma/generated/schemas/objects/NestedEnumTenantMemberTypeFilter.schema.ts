// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema'

const nestedenumtenantmembertypefilterSchema = z.object({
  equals: TenantMemberTypeSchema.optional(),
  in: TenantMemberTypeSchema.array().optional(),
  notIn: TenantMemberTypeSchema.array().optional(),
  not: z.union([TenantMemberTypeSchema, z.lazy(() => NestedEnumTenantMemberTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTenantMemberTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumTenantMemberTypeFilter> = nestedenumtenantmembertypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTenantMemberTypeFilter>;
export const NestedEnumTenantMemberTypeFilterObjectZodSchema = nestedenumtenantmembertypefilterSchema;
