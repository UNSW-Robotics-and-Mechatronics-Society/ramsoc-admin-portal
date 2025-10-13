// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTenantMembersInputObjectSchema as UserCreateWithoutTenantMembersInputObjectSchema } from './UserCreateWithoutTenantMembersInput.schema';
import { UserUncheckedCreateWithoutTenantMembersInputObjectSchema as UserUncheckedCreateWithoutTenantMembersInputObjectSchema } from './UserUncheckedCreateWithoutTenantMembersInput.schema';
import { UserCreateOrConnectWithoutTenantMembersInputObjectSchema as UserCreateOrConnectWithoutTenantMembersInputObjectSchema } from './UserCreateOrConnectWithoutTenantMembersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTenantMembersInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTenantMembersInput>;
export const UserCreateNestedOneWithoutTenantMembersInputObjectZodSchema = makeSchema();
