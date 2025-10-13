// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutTenantInputObjectSchema as TenantMemberUpdateWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithoutTenantInput.schema';
import { TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema as TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutTenantInput.schema';
import { TenantMemberCreateWithoutTenantInputObjectSchema as TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema as TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithWhereUniqueWithoutTenantInput>;
export const TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
