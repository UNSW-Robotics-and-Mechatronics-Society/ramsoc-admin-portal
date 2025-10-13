// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberOrderByWithRelationInputObjectSchema as TenantMemberOrderByWithRelationInputObjectSchema } from './objects/TenantMemberOrderByWithRelationInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';
import { TenantMemberCountAggregateInputObjectSchema as TenantMemberCountAggregateInputObjectSchema } from './objects/TenantMemberCountAggregateInput.schema';

export const TenantMemberCountSchema: z.ZodType<Prisma.TenantMemberCountArgs> = z.object({ orderBy: z.union([TenantMemberOrderByWithRelationInputObjectSchema, TenantMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantMemberWhereInputObjectSchema.optional(), cursor: TenantMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantMemberCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberCountArgs>;

export const TenantMemberCountZodSchema = z.object({ orderBy: z.union([TenantMemberOrderByWithRelationInputObjectSchema, TenantMemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: TenantMemberWhereInputObjectSchema.optional(), cursor: TenantMemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TenantMemberCountAggregateInputObjectSchema ]).optional() }).strict();