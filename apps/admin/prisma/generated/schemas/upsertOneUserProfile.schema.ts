// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './objects/UserProfileSelect.schema';
import { UserProfileIncludeObjectSchema as UserProfileIncludeObjectSchema } from './objects/UserProfileInclude.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './objects/UserProfileWhereUniqueInput.schema';
import { UserProfileCreateInputObjectSchema as UserProfileCreateInputObjectSchema } from './objects/UserProfileCreateInput.schema';
import { UserProfileUncheckedCreateInputObjectSchema as UserProfileUncheckedCreateInputObjectSchema } from './objects/UserProfileUncheckedCreateInput.schema';
import { UserProfileUpdateInputObjectSchema as UserProfileUpdateInputObjectSchema } from './objects/UserProfileUpdateInput.schema';
import { UserProfileUncheckedUpdateInputObjectSchema as UserProfileUncheckedUpdateInputObjectSchema } from './objects/UserProfileUncheckedUpdateInput.schema';

export const UserProfileUpsertOneSchema: z.ZodType<Prisma.UserProfileUpsertArgs> = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), where: UserProfileWhereUniqueInputObjectSchema, create: z.union([ UserProfileCreateInputObjectSchema, UserProfileUncheckedCreateInputObjectSchema ]), update: z.union([ UserProfileUpdateInputObjectSchema, UserProfileUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserProfileUpsertArgs>;

export const UserProfileUpsertOneZodSchema = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), where: UserProfileWhereUniqueInputObjectSchema, create: z.union([ UserProfileCreateInputObjectSchema, UserProfileUncheckedCreateInputObjectSchema ]), update: z.union([ UserProfileUpdateInputObjectSchema, UserProfileUncheckedUpdateInputObjectSchema ]) }).strict();