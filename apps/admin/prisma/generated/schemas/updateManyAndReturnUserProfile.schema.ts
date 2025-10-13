// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './objects/UserProfileSelect.schema';
import { UserProfileUpdateManyMutationInputObjectSchema as UserProfileUpdateManyMutationInputObjectSchema } from './objects/UserProfileUpdateManyMutationInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';

export const UserProfileUpdateManyAndReturnSchema: z.ZodType<Prisma.UserProfileUpdateManyAndReturnArgs> = z.object({ select: UserProfileSelectObjectSchema.optional(), data: UserProfileUpdateManyMutationInputObjectSchema, where: UserProfileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileUpdateManyAndReturnArgs>;

export const UserProfileUpdateManyAndReturnZodSchema = z.object({ select: UserProfileSelectObjectSchema.optional(), data: UserProfileUpdateManyMutationInputObjectSchema, where: UserProfileWhereInputObjectSchema.optional() }).strict();