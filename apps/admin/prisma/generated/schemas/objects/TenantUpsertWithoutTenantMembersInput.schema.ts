// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutTenantMembersInputObjectSchema as TenantUpdateWithoutTenantMembersInputObjectSchema } from './TenantUpdateWithoutTenantMembersInput.schema';
import { TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema as TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutTenantMembersInput.schema';
import { TenantCreateWithoutTenantMembersInputObjectSchema as TenantCreateWithoutTenantMembersInputObjectSchema } from './TenantCreateWithoutTenantMembersInput.schema';
import { TenantUncheckedCreateWithoutTenantMembersInputObjectSchema as TenantUncheckedCreateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedCreateWithoutTenantMembersInput.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantMembersInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutTenantMembersInput>;
export const TenantUpsertWithoutTenantMembersInputObjectZodSchema = makeSchema();
