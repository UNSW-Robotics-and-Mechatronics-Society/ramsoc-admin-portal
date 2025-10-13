// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './UserProfileWhereUniqueInput.schema';
import { UserProfileCreateWithoutUserInputObjectSchema as UserProfileCreateWithoutUserInputObjectSchema } from './UserProfileCreateWithoutUserInput.schema';
import { UserProfileUncheckedCreateWithoutUserInputObjectSchema as UserProfileUncheckedCreateWithoutUserInputObjectSchema } from './UserProfileUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserProfileWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const UserProfileCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.UserProfileCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileCreateOrConnectWithoutUserInput>;
export const UserProfileCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
