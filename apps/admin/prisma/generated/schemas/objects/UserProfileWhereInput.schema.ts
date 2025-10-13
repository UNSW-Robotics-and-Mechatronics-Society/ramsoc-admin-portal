// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const userprofilewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserProfileWhereInputObjectSchema), z.lazy(() => UserProfileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserProfileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserProfileWhereInputObjectSchema), z.lazy(() => UserProfileWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  firstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  lastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  preferredName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  gender: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  university: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  studyLevel: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  zID: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const UserProfileWhereInputObjectSchema: z.ZodType<Prisma.UserProfileWhereInput> = userprofilewhereinputSchema as unknown as z.ZodType<Prisma.UserProfileWhereInput>;
export const UserProfileWhereInputObjectZodSchema = userprofilewhereinputSchema;
