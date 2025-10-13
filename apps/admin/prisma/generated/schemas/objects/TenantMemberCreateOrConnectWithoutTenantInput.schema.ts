// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutTenantInputObjectSchema as TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema as TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutTenantInput>;
export const TenantMemberCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
