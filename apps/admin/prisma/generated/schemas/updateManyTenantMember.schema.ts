// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TenantMemberUpdateManyMutationInputObjectSchema as TenantMemberUpdateManyMutationInputObjectSchema } from './objects/TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './objects/TenantMemberWhereInput.schema';

export const TenantMemberUpdateManySchema: z.ZodType<Prisma.TenantMemberUpdateManyArgs> = z.object({ data: TenantMemberUpdateManyMutationInputObjectSchema, where: TenantMemberWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TenantMemberUpdateManyArgs>;

export const TenantMemberUpdateManyZodSchema = z.object({ data: TenantMemberUpdateManyMutationInputObjectSchema, where: TenantMemberWhereInputObjectSchema.optional() }).strict();