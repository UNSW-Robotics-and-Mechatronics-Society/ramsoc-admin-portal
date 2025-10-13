// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTenantMembersInputObjectSchema as UserUpdateWithoutTenantMembersInputObjectSchema } from './UserUpdateWithoutTenantMembersInput.schema';
import { UserUncheckedUpdateWithoutTenantMembersInputObjectSchema as UserUncheckedUpdateWithoutTenantMembersInputObjectSchema } from './UserUncheckedUpdateWithoutTenantMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTenantMembersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTenantMembersInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTenantMembersInput>;
export const UserUpdateToOneWithWhereWithoutTenantMembersInputObjectZodSchema = makeSchema();
