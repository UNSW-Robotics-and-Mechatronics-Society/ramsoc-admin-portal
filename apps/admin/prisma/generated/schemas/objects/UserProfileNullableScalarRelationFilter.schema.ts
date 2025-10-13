// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './UserProfileWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => UserProfileWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => UserProfileWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserProfileNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserProfileNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileNullableScalarRelationFilter>;
export const UserProfileNullableScalarRelationFilterObjectZodSchema = makeSchema();
