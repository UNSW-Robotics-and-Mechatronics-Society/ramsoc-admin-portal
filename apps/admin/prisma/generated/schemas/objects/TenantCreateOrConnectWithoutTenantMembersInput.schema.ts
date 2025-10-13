// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutTenantMembersInputObjectSchema as TenantCreateWithoutTenantMembersInputObjectSchema } from './TenantCreateWithoutTenantMembersInput.schema';
import { TenantUncheckedCreateWithoutTenantMembersInputObjectSchema as TenantUncheckedCreateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedCreateWithoutTenantMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantMembersInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutTenantMembersInput>;
export const TenantCreateOrConnectWithoutTenantMembersInputObjectZodSchema = makeSchema();
