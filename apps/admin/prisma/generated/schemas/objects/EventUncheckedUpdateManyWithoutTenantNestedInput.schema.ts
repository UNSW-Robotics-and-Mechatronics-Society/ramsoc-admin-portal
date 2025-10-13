// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutTenantInputObjectSchema as EventCreateWithoutTenantInputObjectSchema } from './EventCreateWithoutTenantInput.schema';
import { EventUncheckedCreateWithoutTenantInputObjectSchema as EventUncheckedCreateWithoutTenantInputObjectSchema } from './EventUncheckedCreateWithoutTenantInput.schema';
import { EventCreateOrConnectWithoutTenantInputObjectSchema as EventCreateOrConnectWithoutTenantInputObjectSchema } from './EventCreateOrConnectWithoutTenantInput.schema';
import { EventUpsertWithWhereUniqueWithoutTenantInputObjectSchema as EventUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutTenantInput.schema';
import { EventCreateManyTenantInputEnvelopeObjectSchema as EventCreateManyTenantInputEnvelopeObjectSchema } from './EventCreateManyTenantInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutTenantInputObjectSchema as EventUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutTenantInput.schema';
import { EventUpdateManyWithWhereWithoutTenantInputObjectSchema as EventUpdateManyWithWhereWithoutTenantInputObjectSchema } from './EventUpdateManyWithWhereWithoutTenantInput.schema';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutTenantInputObjectSchema), z.lazy(() => EventCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => EventUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => EventUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => EventUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => EventUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => EventUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => EventUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => EventScalarWhereInputObjectSchema), z.lazy(() => EventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const EventUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedUpdateManyWithoutTenantNestedInput>;
export const EventUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
