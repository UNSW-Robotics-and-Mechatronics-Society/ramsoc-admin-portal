// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { UserProfileCreateNestedOneWithoutUserInputObjectSchema as UserProfileCreateNestedOneWithoutUserInputObjectSchema } from './UserProfileCreateNestedOneWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => UserProfileCreateNestedOneWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutTenantMembersInput>;
export const UserCreateWithoutTenantMembersInputObjectZodSchema = makeSchema();
