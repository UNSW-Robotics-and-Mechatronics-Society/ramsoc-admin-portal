// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTenantMembersInputObjectSchema as UserCreateWithoutTenantMembersInputObjectSchema } from './UserCreateWithoutTenantMembersInput.schema';
import { UserUncheckedCreateWithoutTenantMembersInputObjectSchema as UserUncheckedCreateWithoutTenantMembersInputObjectSchema } from './UserUncheckedCreateWithoutTenantMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTenantMembersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTenantMembersInput>;
export const UserCreateOrConnectWithoutTenantMembersInputObjectZodSchema = makeSchema();
