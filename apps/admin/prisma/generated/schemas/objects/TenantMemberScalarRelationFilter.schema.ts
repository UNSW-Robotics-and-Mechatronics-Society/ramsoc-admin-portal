// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberScalarRelationFilterObjectSchema: z.ZodType<Prisma.TenantMemberScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberScalarRelationFilter>;
export const TenantMemberScalarRelationFilterObjectZodSchema = makeSchema();
