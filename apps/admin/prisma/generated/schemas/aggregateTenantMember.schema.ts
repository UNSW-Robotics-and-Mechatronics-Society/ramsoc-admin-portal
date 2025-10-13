// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './objects/TenantMemberOrderByWithRelationInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';
import { TenantMemberCountAggregateInputObjectSchema as TenantMemberCountAggregateInputObjectSchema } from './objects/TenantMemberCountAggregateInput.schema';
import { TenantMemberMinAggregateInputObjectSchema as TenantMemberMinAggregateInputObjectSchema } from './objects/TenantMemberMinAggregateInput.schema';
import { TenantMemberMaxAggregateInputObjectSchema as TenantMemberMaxAggregateInputObjectSchema } from './objects/TenantMemberMaxAggregateInput.schema';

export const TenantMemberAggregateSchema: z.ZodType<Prisma.TenantMemberAggregateArgs> = z.object({ orderBy: z.union([TenantMemberOrderByWithRelationInputObjectSchema, TenantMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantMemberWhereInputObjectSchema.optional(), cursor: TenantMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantMemberCountAggregateInputObjectSchema ]).optional(), _min: TenantMemberMinAggregateInputObjectSchema.optional(), _max: TenantMemberMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberAggregateArgs>;

export const TenantMemberAggregateZodSchema = z.object({ orderBy: z.union([TenantMemberOrderByWithRelationInputObjectSchema, TenantMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantMemberWhereInputObjectSchema.optional(), cursor: TenantMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TenantMemberCountAggregateInputObjectSchema ]).optional(), _min: TenantMemberMinAggregateInputObjectSchema.optional(), _max: TenantMemberMaxAggregateInputObjectSchema.optional() }).strict();