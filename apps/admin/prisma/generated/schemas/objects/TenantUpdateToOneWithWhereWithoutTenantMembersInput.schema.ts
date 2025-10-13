// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutTenantMembersInputObjectSchema as TenantUpdateWithoutTenantMembersInputObjectSchema } from './TenantUpdateWithoutTenantMembersInput.schema';
import { TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema as TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutTenantMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutTenantMembersInput>;
export const TenantUpdateToOneWithWhereWithoutTenantMembersInputObjectZodSchema = makeSchema();
