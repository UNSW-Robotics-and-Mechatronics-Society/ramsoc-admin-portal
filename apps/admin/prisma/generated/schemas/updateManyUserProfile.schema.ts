// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileUpdateManyMutationInputObjectSchema as UserProfileUpdateManyMutationInputObjectSchema } from './objects/UserProfileUpdateManyMutationInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';

export const UserProfileUpdateManySchema: z.ZodType<Prisma.UserProfileUpdateManyArgs> = z.object({ data: UserProfileUpdateManyMutationInputObjectSchema, where: UserProfileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileUpdateManyArgs>;

export const UserProfileUpdateManyZodSchema = z.object({ data: UserProfileUpdateManyMutationInputObjectSchema, where: UserProfileWhereInputObjectSchema.optional() }).strict();