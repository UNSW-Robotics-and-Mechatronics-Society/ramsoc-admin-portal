// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutTenantMembersInputObjectSchema as TenantCreateWithoutTenantMembersInputObjectSchema } from './TenantCreateWithoutTenantMembersInput.schema';
import { TenantUncheckedCreateWithoutTenantMembersInputObjectSchema as TenantUncheckedCreateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedCreateWithoutTenantMembersInput.schema';
import { TenantCreateOrConnectWithoutTenantMembersInputObjectSchema as TenantCreateOrConnectWithoutTenantMembersInputObjectSchema } from './TenantCreateOrConnectWithoutTenantMembersInput.schema';
import { TenantUpsertWithoutTenantMembersInputObjectSchema as TenantUpsertWithoutTenantMembersInputObjectSchema } from './TenantUpsertWithoutTenantMembersInput.schema';
import { TenantWhereUniqueInputObjectSchema as TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema as TenantUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutTenantMembersInput.schema';
import { TenantUpdateWithoutTenantMembersInputObjectSchema as TenantUpdateWithoutTenantMembersInputObjectSchema } from './TenantUpdateWithoutTenantMembersInput.schema';
import { TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema as TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutTenantMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutTenantMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutTenantMembersInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUpdateWithoutTenantMembersInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutTenantMembersInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutTenantMembersNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutTenantMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutTenantMembersNestedInput>;
export const TenantUpdateOneRequiredWithoutTenantMembersNestedInputObjectZodSchema = makeSchema();
