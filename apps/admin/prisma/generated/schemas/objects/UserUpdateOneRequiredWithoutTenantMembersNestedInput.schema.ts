// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTenantMembersInputObjectSchema as UserCreateWithoutTenantMembersInputObjectSchema } from './UserCreateWithoutTenantMembersInput.schema';
import { UserUncheckedCreateWithoutTenantMembersInputObjectSchema as UserUncheckedCreateWithoutTenantMembersInputObjectSchema } from './UserUncheckedCreateWithoutTenantMembersInput.schema';
import { UserCreateOrConnectWithoutTenantMembersInputObjectSchema as UserCreateOrConnectWithoutTenantMembersInputObjectSchema } from './UserCreateOrConnectWithoutTenantMembersInput.schema';
import { UserUpsertWithoutTenantMembersInputObjectSchema as UserUpsertWithoutTenantMembersInputObjectSchema } from './UserUpsertWithoutTenantMembersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema as UserUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTenantMembersInput.schema';
import { UserUpdateWithoutTenantMembersInputObjectSchema as UserUpdateWithoutTenantMembersInputObjectSchema } from './UserUpdateWithoutTenantMembersInput.schema';
import { UserUncheckedUpdateWithoutTenantMembersInputObjectSchema as UserUncheckedUpdateWithoutTenantMembersInputObjectSchema } from './UserUncheckedUpdateWithoutTenantMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTenantMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTenantMembersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUpdateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantMembersInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTenantMembersNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTenantMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTenantMembersNestedInput>;
export const UserUpdateOneRequiredWithoutTenantMembersNestedInputObjectZodSchema = makeSchema();
