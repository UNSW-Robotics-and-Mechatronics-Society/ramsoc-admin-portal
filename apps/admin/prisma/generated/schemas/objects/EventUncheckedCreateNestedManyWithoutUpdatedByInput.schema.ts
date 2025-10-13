// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutUpdatedByInputObjectSchema as EventCreateWithoutUpdatedByInputObjectSchema } from './EventCreateWithoutUpdatedByInput.schema';
import { EventUncheckedCreateWithoutUpdatedByInputObjectSchema as EventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EventUncheckedCreateWithoutUpdatedByInput.schema';
import { EventCreateOrConnectWithoutUpdatedByInputObjectSchema as EventCreateOrConnectWithoutUpdatedByInputObjectSchema } from './EventCreateOrConnectWithoutUpdatedByInput.schema';
import { EventCreateManyUpdatedByInputEnvelopeObjectSchema as EventCreateManyUpdatedByInputEnvelopeObjectSchema } from './EventCreateManyUpdatedByInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const EventUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = makeSchema();
