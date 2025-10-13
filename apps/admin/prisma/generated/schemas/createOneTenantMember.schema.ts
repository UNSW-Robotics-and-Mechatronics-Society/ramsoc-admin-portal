// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './objects/TenantMemberInclude.schema';
import { TenantMemberCreateInputObjectSchema as TenantMemberCreateInputObjectSchema } from './objects/TenantMemberCreateInput.schema';
import { TenantMemberUncheckedCreateInputObjectSchema as TenantMemberUncheckedCreateInputObjectSchema } from './objects/TenantMemberUncheckedCreateInput.schema';

export const TenantMemberCreateOneSchema: z.ZodType<Prisma.TenantMemberCreateArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), data: z.union([TenantMemberCreateInputObjectSchema, TenantMemberUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TenantMemberCreateArgs>;

export const TenantMemberCreateOneZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), data: z.union([TenantMemberCreateInputObjectSchema, TenantMemberUncheckedCreateInputObjectSchema]) }).strict();