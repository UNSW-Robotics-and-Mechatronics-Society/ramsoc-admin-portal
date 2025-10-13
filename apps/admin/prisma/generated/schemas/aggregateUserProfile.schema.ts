// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileOrderByWithRelationInputObjectSchema as UserProfileOrderByWithRelationInputObjectSchema } from './objects/UserProfileOrderByWithRelationInput.schema';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';
import { UserProfileWhereUniqueInputObjectSchema as UserProfileWhereUniqueInputObjectSchema } from './objects/UserProfileWhereUniqueInput.schema';
import { UserProfileCountAggregateInputObjectSchema as UserProfileCountAggregateInputObjectSchema } from './objects/UserProfileCountAggregateInput.schema';
import { UserProfileMinAggregateInputObjectSchema as UserProfileMinAggregateInputObjectSchema } from './objects/UserProfileMinAggregateInput.schema';
import { UserProfileMaxAggregateInputObjectSchema as UserProfileMaxAggregateInputObjectSchema } from './objects/UserProfileMaxAggregateInput.schema';

export const UserProfileAggregateSchema: z.ZodType<Prisma.UserProfileAggregateArgs> = z.object({ orderBy: z.union([UserProfileOrderByWithRelationInputObjectSchema, UserProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserProfileWhereInputObjectSchema.optional(), cursor: UserProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserProfileCountAggregateInputObjectSchema ]).optional(), _min: UserProfileMinAggregateInputObjectSchema.optional(), _max: UserProfileMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileAggregateArgs>;

export const UserProfileAggregateZodSchema = z.object({ orderBy: z.union([UserProfileOrderByWithRelationInputObjectSchema, UserProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserProfileWhereInputObjectSchema.optional(), cursor: UserProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), UserProfileCountAggregateInputObjectSchema ]).optional(), _min: UserProfileMinAggregateInputObjectSchema.optional(), _max: UserProfileMaxAggregateInputObjectSchema.optional() }).strict();