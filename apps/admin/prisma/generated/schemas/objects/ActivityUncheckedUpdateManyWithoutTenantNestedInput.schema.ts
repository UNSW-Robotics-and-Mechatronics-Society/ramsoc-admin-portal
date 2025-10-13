// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutTenantInputObjectSchema as ActivityCreateWithoutTenantInputObjectSchema } from './ActivityCreateWithoutTenantInput.schema';
import { ActivityUncheckedCreateWithoutTenantInputObjectSchema as ActivityUncheckedCreateWithoutTenantInputObjectSchema } from './ActivityUncheckedCreateWithoutTenantInput.schema';
import { ActivityCreateOrConnectWithoutTenantInputObjectSchema as ActivityCreateOrConnectWithoutTenantInputObjectSchema } from './ActivityCreateOrConnectWithoutTenantInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutTenantInputObjectSchema as ActivityUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ActivityCreateManyTenantInputEnvelopeObjectSchema as ActivityCreateManyTenantInputEnvelopeObjectSchema } from './ActivityCreateManyTenantInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutTenantInputObjectSchema as ActivityUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ActivityUpdateManyWithWhereWithoutTenantInputObjectSchema as ActivityUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutTenantInput.schema';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivityCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivityUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ActivityUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivityUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ActivityUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivityUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ActivityUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutTenantNestedInput>;
export const ActivityUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
