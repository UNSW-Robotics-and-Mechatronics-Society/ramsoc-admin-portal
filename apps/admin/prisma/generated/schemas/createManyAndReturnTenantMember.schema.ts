// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberCreateManyInputObjectSchema as TenantMemberCreateManyInputObjectSchema } from './objects/TenantMemberCreateManyInput.schema';

export const TenantMemberCreateManyAndReturnSchema: z.ZodType<Prisma.TenantMemberCreateManyAndReturnArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), data: z.union([ TenantMemberCreateManyInputObjectSchema, z.array(TenantMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberCreateManyAndReturnArgs>;

export const TenantMemberCreateManyAndReturnZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), data: z.union([ TenantMemberCreateManyInputObjectSchema, z.array(TenantMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();