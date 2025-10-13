// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TenantMemberWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TenantMemberWhereInputObjectSchema).optional().nullable()
}).strict();
export const TenantMemberNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TenantMemberNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberNullableScalarRelationFilter>;
export const TenantMemberNullableScalarRelationFilterObjectZodSchema = makeSchema();
