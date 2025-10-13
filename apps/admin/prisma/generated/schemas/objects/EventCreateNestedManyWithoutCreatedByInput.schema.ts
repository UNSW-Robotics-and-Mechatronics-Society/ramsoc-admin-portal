// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutCreatedByInputObjectSchema as EventCreateWithoutCreatedByInputObjectSchema } from './EventCreateWithoutCreatedByInput.schema';
import { EventUncheckedCreateWithoutCreatedByInputObjectSchema as EventUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventUncheckedCreateWithoutCreatedByInput.schema';
import { EventCreateOrConnectWithoutCreatedByInputObjectSchema as EventCreateOrConnectWithoutCreatedByInputObjectSchema } from './EventCreateOrConnectWithoutCreatedByInput.schema';
import { EventCreateManyCreatedByInputEnvelopeObjectSchema as EventCreateManyCreatedByInputEnvelopeObjectSchema } from './EventCreateManyCreatedByInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutCreatedByInputObjectSchema), z.lazy(() => EventCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.EventCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedManyWithoutCreatedByInput>;
export const EventCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
