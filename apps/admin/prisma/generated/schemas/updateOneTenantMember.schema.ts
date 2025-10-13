// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './objects/TenantMemberInclude.schema';
import { TenantMemberUpdateInputObjectSchema as TenantMemberUpdateInputObjectSchema } from './objects/TenantMemberUpdateInput.schema';
import { TenantMemberUncheckedUpdateInputObjectSchema as TenantMemberUncheckedUpdateInputObjectSchema } from './objects/TenantMemberUncheckedUpdateInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';

export const TenantMemberUpdateOneSchema: z.ZodType<Prisma.TenantMemberUpdateArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), data: z.union([TenantMemberUpdateInputObjectSchema, TenantMemberUncheckedUpdateInputObjectSchema]), where: TenantMemberWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TenantMemberUpdateArgs>;

export const TenantMemberUpdateOneZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), data: z.union([TenantMemberUpdateInputObjectSchema, TenantMemberUncheckedUpdateInputObjectSchema]), where: TenantMemberWhereUniqueInputObjectSchema }).strict();