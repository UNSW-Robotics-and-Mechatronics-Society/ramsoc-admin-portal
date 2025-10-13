// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileIncludeObjectSchema as UserProfileIncludeObjectSchema } from './objects/UserProfileInclude.schema';
import { UserProfileOrderByWithRelationInputObjectSchema as UserProfileOrderByWithRelationInputObjectSchema } from './objects/UserProfileOrderByWithRelationInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './objects/UserProfileWhereUniqueInput.schema';
import { UserProfileScalarFieldEnumSchema } from './enums/UserProfileScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserProfileFindFirstSelectSchema: z.ZodType<Prisma.UserProfileSelect> = z.object({
    userId: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    preferredName: z.boolean().optional(),
    image: z.boolean().optional(),
    gender: z.boolean().optional(),
    university: z.boolean().optional(),
    studyLevel: z.boolean().optional(),
    zID: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserProfileSelect>;

export const UserProfileFindFirstSelectZodSchema = z.object({
    userId: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    preferredName: z.boolean().optional(),
    image: z.boolean().optional(),
    gender: z.boolean().optional(),
    university: z.boolean().optional(),
    studyLevel: z.boolean().optional(),
    zID: z.boolean().optional(),
    createDate: z.boolean().optional(),
    updateDate: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const UserProfileFindFirstSchema: z.ZodType<Prisma.UserProfileFindFirstArgs> = z.object({ select: UserProfileFindFirstSelectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), orderBy: z.union([UserProfileOrderByWithRelationInputObjectSchema, UserProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserProfileWhereInputObjectSchema.optional(), cursor: UserProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserProfileScalarFieldEnumSchema, UserProfileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileFindFirstArgs>;

export const UserProfileFindFirstZodSchema = z.object({ select: UserProfileFindFirstSelectSchema.optional(), include: UserProfileIncludeObjectSchema.optional(), orderBy: z.union([UserProfileOrderByWithRelationInputObjectSchema, UserProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserProfileWhereInputObjectSchema.optional(), cursor: UserProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserProfileScalarFieldEnumSchema, UserProfileScalarFieldEnumSchema.array()]).optional() }).strict();