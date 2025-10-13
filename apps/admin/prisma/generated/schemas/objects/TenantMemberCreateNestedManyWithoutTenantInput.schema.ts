// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutTenantInputObjectSchema as TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema as TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';
import { TenantMemberCreateOrConnectWithoutTenantInputObjectSchema as TenantMemberCreateOrConnectWithoutTenantInputObjectSchema } from './TenantMemberCreateOrConnectWithoutTenantInput.schema';
import { TenantMemberCreateManyTenantInputEnvelopeObjectSchema as TenantMemberCreateManyTenantInputEnvelopeObjectSchema } from './TenantMemberCreateManyTenantInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantMemberCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantMemberCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantMemberCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedManyWithoutTenantInput>;
export const TenantMemberCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
