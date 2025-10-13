// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './objects/TenantMemberInclude.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';

export const TenantMemberDeleteOneSchema: z.ZodType<Prisma.TenantMemberDeleteArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), where: TenantMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantMemberDeleteArgs>;

export const TenantMemberDeleteOneZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), where: TenantMemberWhereUniqueInputObjectSchema }).strict();