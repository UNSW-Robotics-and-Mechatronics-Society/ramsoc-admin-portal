// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutCreatedByInputObjectSchema as ActivitySessionCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCreatedByInput.schema';
import { ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema as ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutCreatedByInput.schema';
import { ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema as ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema } from './ActivitySessionCreateManyCreatedByInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { ActivitySessionUpdateManyWithWhereWithoutCreatedByInputObjectSchema as ActivitySessionUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './ActivitySessionUpdateManyWithWhereWithoutCreatedByInput.schema';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const ActivitySessionUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
