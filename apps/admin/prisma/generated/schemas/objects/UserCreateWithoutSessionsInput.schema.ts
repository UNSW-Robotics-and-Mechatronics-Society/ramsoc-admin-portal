// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { UserProfileCreateNestedOneWithoutUserInputObjectSchema as UserProfileCreateNestedOneWithoutUserInputObjectSchema } from './UserProfileCreateNestedOneWithoutUserInput.schema';
import { TenantMemberCreateNestedManyWithoutUserInputObjectSchema as TenantMemberCreateNestedManyWithoutUserInputObjectSchema } from './TenantMemberCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => UserProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
  tenantMembers: z.lazy(() => TenantMemberCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSessionsInput>;
export const UserCreateWithoutSessionsInputObjectZodSchema = makeSchema();
