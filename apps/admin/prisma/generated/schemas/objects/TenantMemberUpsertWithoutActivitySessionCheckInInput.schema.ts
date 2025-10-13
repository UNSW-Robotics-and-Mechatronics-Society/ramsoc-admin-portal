// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUpdateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutActivitySessionCheckInInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutActivitySessionCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutActivitySessionCheckInInput>;
export const TenantMemberUpsertWithoutActivitySessionCheckInInputObjectZodSchema = makeSchema();
