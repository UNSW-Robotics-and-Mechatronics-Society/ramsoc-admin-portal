// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutTenantInputObjectSchema as TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema as TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';
import { TenantMemberCreateOrConnectWithoutTenantInputObjectSchema as TenantMemberCreateOrConnectWithoutTenantInputObjectSchema } from './TenantMemberCreateOrConnectWithoutTenantInput.schema';
import { TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema as TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantMemberUpsertWithWhereUniqueWithoutTenantInput.schema';
import { TenantMemberCreateManyTenantInputEnvelopeObjectSchema as TenantMemberCreateManyTenantInputEnvelopeObjectSchema } from './TenantMemberCreateManyTenantInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema as TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithWhereUniqueWithoutTenantInput.schema';
import { TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema as TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema } from './TenantMemberUpdateManyWithWhereWithoutTenantInput.schema';
import { TenantMemberScalarWhereInputObjectSchema as TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantMemberCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantMemberCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantMemberScalarWhereInputObjectSchema), z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantMemberUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUncheckedUpdateManyWithoutTenantNestedInput>;
export const TenantMemberUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
