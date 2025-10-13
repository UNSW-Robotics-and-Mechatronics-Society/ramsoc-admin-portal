// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema as AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema as UserProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './UserProfileUncheckedCreateNestedOneWithoutUserInput.schema';
import { TenantMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema as TenantMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './TenantMemberUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  profile: z.lazy(() => UserProfileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
  tenantMembers: z.lazy(() => TenantMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput>;
export const UserUncheckedCreateWithoutSessionsInputObjectZodSchema = makeSchema();
