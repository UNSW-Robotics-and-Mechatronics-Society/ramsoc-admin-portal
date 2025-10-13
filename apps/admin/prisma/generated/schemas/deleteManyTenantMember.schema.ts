// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';

export const TenantMemberDeleteManySchema: z.ZodType<Prisma.TenantMemberDeleteManyArgs> = z.object({ where: TenantMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberDeleteManyArgs>;

export const TenantMemberDeleteManyZodSchema = z.object({ where: TenantMemberWhereInputObjectSchema.optional() }).strict();