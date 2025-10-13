// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberSelectObjectSchema as TenantMemberSelectObjectSchema } from './objects/TenantMemberSelect.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema as TenantMemberUpdateManyMutationInputObjectSchema } from './objects/TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';

export const TenantMemberUpdateManyAndReturnSchema: z.ZodType<Prisma.TenantMemberUpdateManyAndReturnArgs> = z.object({ select: TenantMemberSelectObjectSchema.optional(), data: TenantMemberUpdateManyMutationInputObjectSchema, where: TenantMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberUpdateManyAndReturnArgs>;

export const TenantMemberUpdateManyAndReturnZodSchema = z.object({ select: TenantMemberSelectObjectSchema.optional(), data: TenantMemberUpdateManyMutationInputObjectSchema, where: TenantMemberWhereInputObjectSchema.optional() }).strict();