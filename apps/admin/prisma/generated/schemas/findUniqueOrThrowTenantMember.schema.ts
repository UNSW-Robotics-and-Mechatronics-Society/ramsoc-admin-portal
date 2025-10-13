// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './objects/TenantMemberInclude.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';

export const TenantMemberFindUniqueOrThrowSchema: z.ZodType<Prisma.TenantMemberFindUniqueOrThrowArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), where: TenantMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantMemberFindUniqueOrThrowArgs>;

export const TenantMemberFindUniqueOrThrowZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), where: TenantMemberWhereUniqueInputObjectSchema }).strict();