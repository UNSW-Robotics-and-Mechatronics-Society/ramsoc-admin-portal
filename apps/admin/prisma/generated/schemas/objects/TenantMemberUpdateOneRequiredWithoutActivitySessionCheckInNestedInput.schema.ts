// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateOrConnectWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUpsertWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUpsertWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUpsertWithoutActivitySessionCheckInInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUpdateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutActivitySessionCheckInInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutActivitySessionCheckInInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInput>;
export const TenantMemberUpdateOneRequiredWithoutActivitySessionCheckInNestedInputObjectZodSchema = makeSchema();
