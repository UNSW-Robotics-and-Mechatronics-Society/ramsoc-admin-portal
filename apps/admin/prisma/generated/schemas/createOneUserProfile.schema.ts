// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './objects/UserProfileSelect.schema';
import { UserProfileIncludeObjectSchema as UserProfileIncludeObjectSchema } from './objects/UserProfileInclude.schema';
import { UserProfileCreateInputObjectSchema as UserProfileCreateInputObjectSchema } from './objects/UserProfileCreateInput.schema';
import { UserProfileUncheckedCreateInputObjectSchema as UserProfileUncheckedCreateInputObjectSchema } from './objects/UserProfileUncheckedCreateInput.schema';

export const UserProfileCreateOneSchema: z.ZodType<Prisma.UserProfileCreateArgs> = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), data: z.union([UserProfileCreateInputObjectSchema, UserProfileUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserProfileCreateArgs>;

export const UserProfileCreateOneZodSchema = z.object({ select: UserProfileSelectObjectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), data: z.union([UserProfileCreateInputObjectSchema, UserProfileUncheckedCreateInputObjectSchema]) }).strict();