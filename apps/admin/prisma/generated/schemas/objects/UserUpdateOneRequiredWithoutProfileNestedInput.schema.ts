// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutProfileInputObjectSchema as UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema as UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserCreateOrConnectWithoutProfileInputObjectSchema as UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema';
import { UserUpsertWithoutProfileInputObjectSchema as UserUpsertWithoutProfileInputObjectSchema } from './UserUpsertWithoutProfileInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutProfileInputObjectSchema as UserUpdateToOneWithWhereWithoutProfileInputObjectSchema } from './UserUpdateToOneWithWhereWithoutProfileInput.schema';
import { UserUpdateWithoutProfileInputObjectSchema as UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema';
import { UserUncheckedUpdateWithoutProfileInputObjectSchema as UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutProfileInputObjectSchema), z.lazy(() => UserUpdateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutProfileNestedInput>;
export const UserUpdateOneRequiredWithoutProfileNestedInputObjectZodSchema = makeSchema();
