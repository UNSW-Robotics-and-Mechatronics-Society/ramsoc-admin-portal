// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUpdateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInput>;
export const TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInputObjectZodSchema = makeSchema();
