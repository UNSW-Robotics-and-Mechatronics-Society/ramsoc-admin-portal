// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './objects/UserProfileSelect.schema';
import { UserProfileIncludeObjectSchema as UserProfileIncludeObjectSchema } from './objects/UserProfileInclude.schema';
import { UserProfileUpdateInputObjectSchema as UserProfileUpdateInputObjectSchema } from './objects/UserProfileUpdateInput.schema';
import { UserProfileUncheckedUpdateInputObjectSchema as UserProfileUncheckedUpdateInputObjectSchema } from './objects/UserProfileUncheckedUpdateInput.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './objects/UserProfileWhereUniqueInput.schema';

export const UserProfileUpdateOneSchema: z.ZodType<Prisma.UserProfileUpdateArgs> = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), data: z.union([UserProfileUpdateInputObjectSchema, UserProfileUncheckedUpdateInputObjectSchema]), where: UserProfileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserProfileUpdateArgs>;

export const UserProfileUpdateOneZodSchema = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), data: z.union([UserProfileUpdateInputObjectSchema, UserProfileUncheckedUpdateInputObjectSchema]), where: UserProfileWhereUniqueInputObjectSchema }).strict();