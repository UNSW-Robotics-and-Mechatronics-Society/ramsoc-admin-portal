// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileUpdateWithoutUserInputObjectSchema as UserProfileUpdateWithoutUserInputObjectSchema } from './UserProfileUpdateWithoutUserInput.schema';
import { UserProfileUncheckedUpdateWithoutUserInputObjectSchema as UserProfileUncheckedUpdateWithoutUserInputObjectSchema } from './UserProfileUncheckedUpdateWithoutUserInput.schema';
import { UserProfileCreateWithoutUserInputObjectSchema as UserProfileCreateWithoutUserInputObjectSchema } from './UserProfileCreateWithoutUserInput.schema';
import { UserProfileUncheckedCreateWithoutUserInputObjectSchema as UserProfileUncheckedCreateWithoutUserInputObjectSchema } from './UserProfileUncheckedCreateWithoutUserInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './UserProfileWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => UserProfileWhereInputObjectSchema).optional()
}).strict();
export const UserProfileUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.UserProfileUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileUpsertWithoutUserInput>;
export const UserProfileUpsertWithoutUserInputObjectZodSchema = makeSchema();
