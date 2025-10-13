// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutCreatedByInputObjectSchema as ActivityCreateWithoutCreatedByInputObjectSchema } from './ActivityCreateWithoutCreatedByInput.schema';
import { ActivityUncheckedCreateWithoutCreatedByInputObjectSchema as ActivityUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutCreatedByInput.schema';
import { ActivityCreateOrConnectWithoutCreatedByInputObjectSchema as ActivityCreateOrConnectWithoutCreatedByInputObjectSchema } from './ActivityCreateOrConnectWithoutCreatedByInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as ActivityUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ActivityCreateManyCreatedByInputEnvelopeObjectSchema as ActivityCreateManyCreatedByInputEnvelopeObjectSchema } from './ActivityCreateManyCreatedByInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as ActivityUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ActivityUpdateManyWithWhereWithoutCreatedByInputObjectSchema as ActivityUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivityUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivityUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivityUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const ActivityUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
