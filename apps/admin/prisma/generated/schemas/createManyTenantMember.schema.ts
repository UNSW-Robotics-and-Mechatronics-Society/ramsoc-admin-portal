// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberCreateManyInputObjectSchema as TenantMemberCreateManyInputObjectSchema } from './objects/TenantMemberCreateManyInput.schema';

export const TenantMemberCreateManySchema: z.ZodType<Prisma.TenantMemberCreateManyArgs> = z.object({ data: z.union([ TenantMemberCreateManyInputObjectSchema, z.array(TenantMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberCreateManyArgs>;

export const TenantMemberCreateManyZodSchema = z.object({ data: z.union([ TenantMemberCreateManyInputObjectSchema, z.array(TenantMemberCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();