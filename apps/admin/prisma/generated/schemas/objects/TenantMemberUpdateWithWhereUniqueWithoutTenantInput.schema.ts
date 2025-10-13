// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutTenantInputObjectSchema as TenantMemberUpdateWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithoutTenantInput.schema';
import { TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema as TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutTenantInput>;
export const TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
