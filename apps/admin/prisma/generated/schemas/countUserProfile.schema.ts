// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileOrderByWithRelationInputObjectSchema as UserProfileOrderByWithRelationInputObjectSchema } from './objects/UserProfileOrderByWithRelationInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './objects/UserProfileWhereUniqueInput.schema';
import { UserProfileCountAggregateInputObjectSchema as UserProfileCountAggregateInputObjectSchema } from './objects/UserProfileCountAggregateInput.schema';

export const UserProfileCountSchema: z.ZodType<Prisma.UserProfileCountArgs> = z.object({ orderBy: z.union([UserProfileOrderByWithRelationInputObjectSchema, UserProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserProfileWhereInputObjectSchema.optional(), cursor: UserProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserProfileCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileCountArgs>;

export const UserProfileCountZodSchema = z.object({ orderBy: z.union([UserProfileOrderByWithRelationInputObjectSchema, UserProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserProfileWhereInputObjectSchema.optional(), cursor: UserProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserProfileCountAggregateInputObjectSchema ]).optional() }).strict();