// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileSelectObjectSchema as UserProfileSelectObjectSchema } from './objects/UserProfileSelect.schema';
import { UserProfileCreateManyInputObjectSchema as UserProfileCreateManyInputObjectSchema } from './objects/UserProfileCreateManyInput.schema';

export const UserProfileCreateManyAndReturnSchema: z.ZodType<Prisma.UserProfileCreateManyAndReturnArgs> = z.object({ select: UserProfileSelectObjectSchema.optional(), data: z.union([ UserProfileCreateManyInputObjectSchema, z.array(UserProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileCreateManyAndReturnArgs>;

export const UserProfileCreateManyAndReturnZodSchema = z.object({ select: UserProfileSelectObjectSchema.optional(), data: z.union([ UserProfileCreateManyInputObjectSchema, z.array(UserProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();