// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema as TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberUncheckedCreateWithoutActivitySessionCheckInInput.schema';
import { TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateOrConnectWithoutActivitySessionCheckInInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutActivitySessionCheckInInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutActivitySessionCheckInInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutActivitySessionCheckInInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutActivitySessionCheckInInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutActivitySessionCheckInInput>;
export const TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectZodSchema = makeSchema();
