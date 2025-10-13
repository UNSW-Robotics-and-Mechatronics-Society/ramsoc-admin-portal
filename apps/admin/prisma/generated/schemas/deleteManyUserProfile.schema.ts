// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';

export const UserProfileDeleteManySchema: z.ZodType<Prisma.UserProfileDeleteManyArgs> = z.object({ where: UserProfileWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileDeleteManyArgs>;

export const UserProfileDeleteManyZodSchema = z.object({ where: UserProfileWhereInputObjectSchema.optional() }).strict();