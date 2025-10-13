// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutUpdatedByInputObjectSchema as ActivitySessionCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutUpdatedByInput.schema';
import { ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema as ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutUpdatedByInput.schema';
import { ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema as ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema as ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema } from './ActivitySessionCreateManyUpdatedByInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema as ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ActivitySessionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema as ActivitySessionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ActivitySessionUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInput>;
export const ActivitySessionUncheckedUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = makeSchema();
