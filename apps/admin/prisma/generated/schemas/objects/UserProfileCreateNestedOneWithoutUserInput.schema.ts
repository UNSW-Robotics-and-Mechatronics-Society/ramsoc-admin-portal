// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileCreateWithoutUserInputObjectSchema as UserProfileCreateWithoutUserInputObjectSchema } from './UserProfileCreateWithoutUserInput.schema';
import { UserProfileUncheckedCreateWithoutUserInputObjectSchema as UserProfileUncheckedCreateWithoutUserInputObjectSchema } from './UserProfileUncheckedCreateWithoutUserInput.schema';
import { UserProfileCreateOrConnectWithoutUserInputObjectSchema as UserProfileCreateOrConnectWithoutUserInputObjectSchema } from './UserProfileCreateOrConnectWithoutUserInput.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './UserProfileWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => UserProfileWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserProfileCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.UserProfileCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileCreateNestedOneWithoutUserInput>;
export const UserProfileCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
