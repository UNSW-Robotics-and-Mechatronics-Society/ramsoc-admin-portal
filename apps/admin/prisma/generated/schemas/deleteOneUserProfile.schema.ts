// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './objects/UserProfileSelect.schema';
import { UserProfileIncludeObjectSchema as UserProfileIncludeObjectSchema } from './objects/UserProfileInclude.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './objects/UserProfileWhereUniqueInput.schema';

export const UserProfileDeleteOneSchema: z.ZodType<Prisma.UserProfileDeleteArgs> = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), where: UserProfileWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserProfileDeleteArgs>;

export const UserProfileDeleteOneZodSchema = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), where: UserProfileWhereUniqueInputObjectSchema }).strict();