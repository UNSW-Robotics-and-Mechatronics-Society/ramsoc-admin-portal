// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutUpdatedByInputObjectSchema as ActivityCreateWithoutUpdatedByInputObjectSchema } from './ActivityCreateWithoutUpdatedByInput.schema';
import { ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutUpdatedByInput.schema';
import { ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema as ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ActivityCreateOrConnectWithoutUpdatedByInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema as ActivityUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ActivityCreateManyUpdatedByInputEnvelopeObjectSchema as ActivityCreateManyUpdatedByInputEnvelopeObjectSchema } from './ActivityCreateManyUpdatedByInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema as ActivityUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ActivityUpdateManyWithWhereWithoutUpdatedByInputObjectSchema as ActivityUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivityUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivityUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivityUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithoutUpdatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithoutUpdatedByNestedInput>;
export const ActivityUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = makeSchema();
