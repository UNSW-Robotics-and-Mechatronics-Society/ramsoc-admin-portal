// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutTenantMembersInputObjectSchema as UserUpdateWithoutTenantMembersInputObjectSchema } from './UserUpdateWithoutTenantMembersInput.schema';
import { UserUncheckedUpdateWithoutTenantMembersInputObjectSchema as UserUncheckedUpdateWithoutTenantMembersInputObjectSchema } from './UserUncheckedUpdateWithoutTenantMembersInput.schema';
import { UserCreateWithoutTenantMembersInputObjectSchema as UserCreateWithoutTenantMembersInputObjectSchema } from './UserCreateWithoutTenantMembersInput.schema';
import { UserUncheckedCreateWithoutTenantMembersInputObjectSchema as UserUncheckedCreateWithoutTenantMembersInputObjectSchema } from './UserUncheckedCreateWithoutTenantMembersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantMembersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTenantMembersInput>;
export const UserUpsertWithoutTenantMembersInputObjectZodSchema = makeSchema();
