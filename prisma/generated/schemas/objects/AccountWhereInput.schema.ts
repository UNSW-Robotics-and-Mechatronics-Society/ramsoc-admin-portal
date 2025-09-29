// @ts-nocheck
/* eslint-disable */

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const accountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AccountWhereInputObjectSchema), z.lazy(() => AccountWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerAccountId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  refresh_token: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  access_token: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  expires_at: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  token_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  scope: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  id_token: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  session_state: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  refresh_token_expires_in: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AccountWhereInputObjectSchema: z.ZodType<Prisma.AccountWhereInput> = accountwhereinputSchema as unknown as z.ZodType<Prisma.AccountWhereInput>;
export const AccountWhereInputObjectZodSchema = accountwhereinputSchema;
