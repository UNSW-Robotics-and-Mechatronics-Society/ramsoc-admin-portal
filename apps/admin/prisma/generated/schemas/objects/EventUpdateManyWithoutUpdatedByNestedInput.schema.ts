// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutUpdatedByInputObjectSchema as EventCreateWithoutUpdatedByInputObjectSchema } from './EventCreateWithoutUpdatedByInput.schema';
import { EventUncheckedCreateWithoutUpdatedByInputObjectSchema as EventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EventUncheckedCreateWithoutUpdatedByInput.schema';
import { EventCreateOrConnectWithoutUpdatedByInputObjectSchema as EventCreateOrConnectWithoutUpdatedByInputObjectSchema } from './EventCreateOrConnectWithoutUpdatedByInput.schema';
import { EventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema as EventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { EventCreateManyUpdatedByInputEnvelopeObjectSchema as EventCreateManyUpdatedByInputEnvelopeObjectSchema } from './EventCreateManyUpdatedByInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema as EventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { EventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema as EventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './EventUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventUpdateManyWithoutUpdatedByNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithoutUpdatedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithoutUpdatedByNestedInput>;
export const EventUpdateManyWithoutUpdatedByNestedInputObjectZodSchema = makeSchema();
