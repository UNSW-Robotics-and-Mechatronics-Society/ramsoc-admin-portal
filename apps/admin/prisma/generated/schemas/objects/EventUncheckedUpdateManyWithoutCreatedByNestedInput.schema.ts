// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutCreatedByInputObjectSchema as EventCreateWithoutCreatedByInputObjectSchema } from './EventCreateWithoutCreatedByInput.schema';
import { EventUncheckedCreateWithoutCreatedByInputObjectSchema as EventUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventUncheckedCreateWithoutCreatedByInput.schema';
import { EventCreateOrConnectWithoutCreatedByInputObjectSchema as EventCreateOrConnectWithoutCreatedByInputObjectSchema } from './EventCreateOrConnectWithoutCreatedByInput.schema';
import { EventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema as EventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { EventCreateManyCreatedByInputEnvelopeObjectSchema as EventCreateManyCreatedByInputEnvelopeObjectSchema } from './EventCreateManyCreatedByInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema as EventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { EventUpdateManyWithWhereWithoutCreatedByInputObjectSchema as EventUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './EventUpdateManyWithWhereWithoutCreatedByInput.schema';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutCreatedByInputObjectSchema), z.lazy(() => EventCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => EventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema), z.lazy(() => EventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventUpdateManyWithWhereWithoutCreatedByInputObjectSchema), z.lazy(() => EventUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput>;
export const EventUncheckedUpdateManyWithoutCreatedByNestedInputObjectZodSchema = makeSchema();
