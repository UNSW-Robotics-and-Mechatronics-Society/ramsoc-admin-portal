// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutProfileInputObjectSchema as UserCreateNestedOneWithoutProfileInputObjectSchema } from './UserCreateNestedOneWithoutProfileInput.schema'

const makeSchema = () => z.object({
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  preferredName: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  university: z.string().optional().nullable(),
  studyLevel: z.string().optional().nullable(),
  zID: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputObjectSchema)
}).strict();
export const UserProfileCreateInputObjectSchema: z.ZodType<Prisma.UserProfileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileCreateInput>;
export const UserProfileCreateInputObjectZodSchema = makeSchema();
