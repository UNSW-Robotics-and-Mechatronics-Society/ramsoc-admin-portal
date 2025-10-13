// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { UserProfileWhereInputObjectSchema as UserProfileWhereInputObjectSchema } from './objects/UserProfileWhereInput.schema';
import { UserProfileOrderByWithAggregationInputObjectSchema as UserProfileOrderByWithAggregationInputObjectSchema } from './objects/UserProfileOrderByWithAggregationInput.schema';
import { UserProfileScalarWhereWithAggregatesInputObjectSchema as UserProfileScalarWhereWithAggregatesInputObjectSchema } from './objects/UserProfileScalarWhereWithAggregatesInput.schema';
import { UserProfileScalarFieldEnumSchema } from './enums/UserProfileScalarFieldEnum.schema';
import { UserProfileCountAggregateInputObjectSchema as UserProfileCountAggregateInputObjectSchema } from './objects/UserProfileCountAggregateInput.schema';
import { UserProfileMinAggregateInputObjectSchema as UserProfileMinAggregateInputObjectSchema } from './objects/UserProfileMinAggregateInput.schema';
import { UserProfileMaxAggregateInputObjectSchema as UserProfileMaxAggregateInputObjectSchema } from './objects/UserProfileMaxAggregateInput.schema';

export const UserProfileGroupBySchema: z.ZodType<Prisma.UserProfileGroupByArgs> = z.object({ where: UserProfileWhereInputObjectSchema.optional(), orderBy: z.union([UserProfileOrderByWithAggregationInputObjectSchema, UserProfileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserProfileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserProfileScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserProfileCountAggregateInputObjectSchema ]).optional(), _min: UserProfileMinAggregateInputObjectSchema.optional(), _max: UserProfileMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserProfileGroupByArgs>;

export const UserProfileGroupByZodSchema = z.object({ where: UserProfileWhereInputObjectSchema.optional(), orderBy: z.union([UserProfileOrderByWithAggregationInputObjectSchema, UserProfileOrderByWithAggregationInputObjectSchema.array()]).optional(), having: UserProfileScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(UserProfileScalarFieldEnumSchema), _count: z.union([ z.literal(true), UserProfileCountAggregateInputObjectSchema ]).optional(), _min: UserProfileMinAggregateInputObjectSchema.optional(), _max: UserProfileMaxAggregateInputObjectSchema.optional() }).strict();