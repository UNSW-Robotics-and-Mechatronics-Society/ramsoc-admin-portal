// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutProfileInputObjectSchema as UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema as UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserCreateOrConnectWithoutProfileInputObjectSchema as UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutProfileInput>;
export const UserCreateNestedOneWithoutProfileInputObjectZodSchema = makeSchema();
