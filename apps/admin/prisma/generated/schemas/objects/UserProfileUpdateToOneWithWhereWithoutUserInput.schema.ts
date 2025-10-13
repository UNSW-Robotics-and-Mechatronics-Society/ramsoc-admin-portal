// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './UserProfileWhereInput.schema';
import { UserProfileUpdateWithoutUserInputObjectSchema as UserProfileUpdateWithoutUserInputObjectSchema } from './UserProfileUpdateWithoutUserInput.schema';
import { UserProfileUncheckedUpdateWithoutUserInputObjectSchema as UserProfileUncheckedUpdateWithoutUserInputObjectSchema } from './UserProfileUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserProfileWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const UserProfileUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.UserProfileUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileUpdateToOneWithWhereWithoutUserInput>;
export const UserProfileUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
