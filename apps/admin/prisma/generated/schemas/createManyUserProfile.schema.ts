// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileCreateManyInputObjectSchema as UserProfileCreateManyInputObjectSchema } from './objects/UserProfileCreateManyInput.schema';

export const UserProfileCreateManySchema: z.ZodType<Prisma.UserProfileCreateManyArgs> = z.object({ data: z.union([ UserProfileCreateManyInputObjectSchema, z.array(UserProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileCreateManyArgs>;

export const UserProfileCreateManyZodSchema = z.object({ data: z.union([ UserProfileCreateManyInputObjectSchema, z.array(UserProfileCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();