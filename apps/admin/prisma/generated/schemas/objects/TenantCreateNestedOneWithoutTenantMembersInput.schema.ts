// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutTenantMembersInputObjectSchema as TenantCreateWithoutTenantMembersInputObjectSchema } from './TenantCreateWithoutTenantMembersInput.schema';
import { TenantUncheckedCreateWithoutTenantMembersInputObjectSchema as TenantUncheckedCreateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedCreateWithoutTenantMembersInput.schema';
import { TenantCreateOrConnectWithoutTenantMembersInputObjectSchema as TenantCreateOrConnectWithoutTenantMembersInputObjectSchema } from './TenantCreateOrConnectWithoutTenantMembersInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutTenantMembersInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutTenantMembersInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutTenantMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutTenantMembersInput>;
export const TenantCreateNestedOneWithoutTenantMembersInputObjectZodSchema = makeSchema();
