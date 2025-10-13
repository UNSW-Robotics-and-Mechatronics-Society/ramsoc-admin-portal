// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  some: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  none: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberListRelationFilterObjectSchema: z.ZodType<Prisma.TenantMemberListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberListRelationFilter>;
export const TenantMemberListRelationFilterObjectZodSchema = makeSchema();
