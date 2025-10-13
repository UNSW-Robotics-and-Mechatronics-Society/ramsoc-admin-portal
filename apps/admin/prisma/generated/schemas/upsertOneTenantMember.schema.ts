// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberIncludeObjectSchema as TenantMemberIncludeObjectSchema } from './objects/TenantMemberInclude.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './objects/TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateInputObjectSchema as TenantMemberCreateInputObjectSchema } from './objects/TenantMemberCreateInput.schema';
import { TenantMemberUncheckedCreateInputObjectSchema as TenantMemberUncheckedCreateInputObjectSchema } from './objects/TenantMemberUncheckedCreateInput.schema';
import { TenantMemberUpdateInputObjectSchema as TenantMemberUpdateInputObjectSchema } from './objects/TenantMemberUpdateInput.schema';
import { TenantMemberUncheckedUpdateInputObjectSchema as TenantMemberUncheckedUpdateInputObjectSchema } from './objects/TenantMemberUncheckedUpdateInput.schema';

export const TenantMemberUpsertOneSchema: z.ZodType<Prisma.TenantMemberUpsertArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), where: TenantMemberWhereUniqueInputObjectSchema, create: z.union([ TenantMemberCreateInputObjectSchema, TenantMemberUncheckedCreateInputObjectSchema ]), update: z.union([ TenantMemberUpdateInputObjectSchema, TenantMemberUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TenantMemberUpsertArgs>;

export const TenantMemberUpsertOneZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), include: TenantMemberIncludeObjectSchema.optional(), where: TenantMemberWhereUniqueInputObjectSchema, create: z.union([ TenantMemberCreateInputObjectSchema, TenantMemberUncheckedCreateInputObjectSchema ]), update: z.union([ TenantMemberUpdateInputObjectSchema, TenantMemberUncheckedUpdateInputObjectSchema ]) }).strict();