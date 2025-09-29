// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { VerificationTokenWhereInputObjectSchema as VerificationTokenWhereInputObjectSchema } from './objects/VerificationTokenWhereInput.schema';
import { VerificationTokenOrderByWithAggregationInputObjectSchema as VerificationTokenOrderByWithAggregationInputObjectSchema } from './objects/VerificationTokenOrderByWithAggregationInput.schema';
import { VerificationTokenScalarWhereWithAggregatesInputObjectSchema as VerificationTokenScalarWhereWithAggregatesInputObjectSchema } from './objects/VerificationTokenScalarWhereWithAggregatesInput.schema';
import { VerificationTokenScalarFieldEnumSchema } from './enums/VerificationTokenScalarFieldEnum.schema';
import { VerificationTokenCountAggregateInputObjectSchema as VerificationTokenCountAggregateInputObjectSchema } from './objects/VerificationTokenCountAggregateInput.schema';
import { VerificationTokenMinAggregateInputObjectSchema as VerificationTokenMinAggregateInputObjectSchema } from './objects/VerificationTokenMinAggregateInput.schema';
import { VerificationTokenMaxAggregateInputObjectSchema as VerificationTokenMaxAggregateInputObjectSchema } from './objects/VerificationTokenMaxAggregateInput.schema';

export const VerificationTokenGroupBySchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({ where: VerificationTokenWhereInputObjectSchema.optional(), orderBy: z.union([VerificationTokenOrderByWithAggregationInputObjectSchema, VerificationTokenOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VerificationTokenScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VerificationTokenScalarFieldEnumSchema), _count: z.union([ z.literal(true), VerificationTokenCountAggregateInputObjectSchema ]).optional(), _min: VerificationTokenMinAggregateInputObjectSchema.optional(), _max: VerificationTokenMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.VerificationTokenGroupByArgs>;

export const VerificationTokenGroupByZodSchema = z.object({ where: VerificationTokenWhereInputObjectSchema.optional(), orderBy: z.union([VerificationTokenOrderByWithAggregationInputObjectSchema, VerificationTokenOrderByWithAggregationInputObjectSchema.array()]).optional(), having: VerificationTokenScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(VerificationTokenScalarFieldEnumSchema), _count: z.union([ z.literal(true), VerificationTokenCountAggregateInputObjectSchema ]).optional(), _min: VerificationTokenMinAggregateInputObjectSchema.optional(), _max: VerificationTokenMaxAggregateInputObjectSchema.optional() }).strict();