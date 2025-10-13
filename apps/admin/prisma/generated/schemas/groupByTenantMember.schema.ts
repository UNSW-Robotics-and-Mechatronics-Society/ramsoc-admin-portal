// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';
import { TenantMemberOrderByWithAggregationInputObjectSchema as TenantMemberOrderByWithAggregationInputObjectSchema } from './objects/TenantMemberOrderByWithAggregationInput.schema';
import { TenantMemberScalarWhereWithAggregatesInputObjectSchema as TenantMemberScalarWhereWithAggregatesInputObjectSchema } from './objects/TenantMemberScalarWhereWithAggregatesInput.schema';
import { TenantMemberScalarFieldEnumSchema } from './enums/TenantMemberScalarFieldEnum.schema';
import { TenantMemberCountAggregateInputObjectSchema as TenantMemberCountAggregateInputObjectSchema } from './objects/TenantMemberCountAggregateInput.schema';
import { TenantMemberMinAggregateInputObjectSchema as TenantMemberMinAggregateInputObjectSchema } from './objects/TenantMemberMinAggregateInput.schema';
import { TenantMemberMaxAggregateInputObjectSchema as TenantMemberMaxAggregateInputObjectSchema } from './objects/TenantMemberMaxAggregateInput.schema';

export const TenantMemberGroupBySchema: z.ZodType<Prisma.TenantMemberGroupByArgs> = z.object({ where: TenantMemberWhereInputObjectSchema.optional(), orderBy: z.union([TenantMemberOrderByWithAggregationInputObjectSchema, TenantMemberOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantMemberScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantMemberScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantMemberCountAggregateInputObjectSchema ]).optional(), _min: TenantMemberMinAggregateInputObjectSchema.optional(), _max: TenantMemberMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberGroupByArgs>;

export const TenantMemberGroupByZodSchema = z.object({ where: TenantMemberWhereInputObjectSchema.optional(), orderBy: z.union([TenantMemberOrderByWithAggregationInputObjectSchema, TenantMemberOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TenantMemberScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TenantMemberScalarFieldEnumSchema), _count: z.union([ z.literal(true), TenantMemberCountAggregateInputObjectSchema ]).optional(), _min: TenantMemberMinAggregateInputObjectSchema.optional(), _max: TenantMemberMaxAggregateInputObjectSchema.optional() }).strict();