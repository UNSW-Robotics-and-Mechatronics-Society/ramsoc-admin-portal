// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutActivityInputObjectSchema as ActivitySessionCreateWithoutActivityInputObjectSchema } from './ActivitySessionCreateWithoutActivityInput.schema';
import { ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema as ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutActivityInput.schema';
import { ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema as ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutActivityInput.schema';
import { ActivitySessionUpsertWithWhereUniqueWithoutActivityInputObjectSchema as ActivitySessionUpsertWithWhereUniqueWithoutActivityInputObjectSchema } from './ActivitySessionUpsertWithWhereUniqueWithoutActivityInput.schema';
import { ActivitySessionCreateManyActivityInputEnvelopeObjectSchema as ActivitySessionCreateManyActivityInputEnvelopeObjectSchema } from './ActivitySessionCreateManyActivityInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithWhereUniqueWithoutActivityInputObjectSchema as ActivitySessionUpdateWithWhereUniqueWithoutActivityInputObjectSchema } from './ActivitySessionUpdateWithWhereUniqueWithoutActivityInput.schema';
import { ActivitySessionUpdateManyWithWhereWithoutActivityInputObjectSchema as ActivitySessionUpdateManyWithWhereWithoutActivityInputObjectSchema } from './ActivitySessionUpdateManyWithWhereWithoutActivityInput.schema';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutActivityInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutActivityInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyActivityInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutActivityInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutActivityInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionUpdateManyWithoutActivityNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateManyWithoutActivityNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateManyWithoutActivityNestedInput>;
export const ActivitySessionUpdateManyWithoutActivityNestedInputObjectZodSchema = makeSchema();
