// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProfileInputObjectSchema as UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema as UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutProfileInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutProfileInput>;
export const UserCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
