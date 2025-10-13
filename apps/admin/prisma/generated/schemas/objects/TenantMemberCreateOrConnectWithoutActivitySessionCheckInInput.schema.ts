// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedCreateWithoutActivitySessionCheckInInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutActivitySessionCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutActivitySessionCheckInInput>;
export const TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectZodSchema = makeSchema();
