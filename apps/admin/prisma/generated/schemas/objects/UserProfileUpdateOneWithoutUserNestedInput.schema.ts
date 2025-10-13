// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserProfileCreateWithoutUserInputObjectSchema as UserProfileCreateWithoutUserInputObjectSchema } from './UserProfileCreateWithoutUserInput.schema';
import { UserProfileUncheckedCreateWithoutUserInputObjectSchema as UserProfileUncheckedCreateWithoutUserInputObjectSchema } from './UserProfileUncheckedCreateWithoutUserInput.schema';
import { UserProfileCreateOrConnectWithoutUserInputObjectSchema as UserProfileCreateOrConnectWithoutUserInputObjectSchema } from './UserProfileCreateOrConnectWithoutUserInput.schema';
import { UserProfileUpsertWithoutUserInputObjectSchema as UserProfileUpsertWithoutUserInputObjectSchema } from './UserProfileUpsertWithoutUserInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './UserProfileWhereInput.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './UserProfileWhereUniqueInput.schema';
import { UserProfileUpdateToOneWithWhereWithoutUserInputObjectSchema as UserProfileUpdateToOneWithWhereWithoutUserInputObjectSchema } from './UserProfileUpdateToOneWithWhereWithoutUserInput.schema';
import { UserProfileUpdateWithoutUserInputObjectSchema as UserProfileUpdateWithoutUserInputObjectSchema } from './UserProfileUpdateWithoutUserInput.schema';
import { UserProfileUncheckedUpdateWithoutUserInputObjectSchema as UserProfileUncheckedUpdateWithoutUserInputObjectSchema } from './UserProfileUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserProfileCreateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserProfileCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => UserProfileUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserProfileWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserProfileWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserProfileWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserProfileUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => UserProfileUpdateWithoutUserInputObjectSchema), z.lazy(() => UserProfileUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const UserProfileUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.UserProfileUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserProfileUpdateOneWithoutUserNestedInput>;
export const UserProfileUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
