// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema as ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema } from './ActivitySessionCheckInCreateManyActivitySessionInputEnvelope.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInScalarWhereInputObjectSchema as ActivitySessionCheckInScalarWhereInputObjectSchema } from './ActivitySessionCheckInScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema).array(), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpsertWithWhereUniqueWithoutActivitySessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpdateWithWhereUniqueWithoutActivitySessionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpdateManyWithWhereWithoutActivitySessionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionNestedInput>;
export const ActivitySessionCheckInUncheckedUpdateManyWithoutActivitySessionNestedInputObjectZodSchema = makeSchema();
