// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutUpdatedByInputObjectSchema as EventUpdateWithoutUpdatedByInputObjectSchema } from './EventUpdateWithoutUpdatedByInput.schema';
import { EventUncheckedUpdateWithoutUpdatedByInputObjectSchema as EventUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './EventUncheckedUpdateWithoutUpdatedByInput.schema';
import { EventCreateWithoutUpdatedByInputObjectSchema as EventCreateWithoutUpdatedByInputObjectSchema } from './EventCreateWithoutUpdatedByInput.schema';
import { EventUncheckedCreateWithoutUpdatedByInputObjectSchema as EventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EventUncheckedCreateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutUpdatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const EventUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutUpdatedByInput>;
export const EventUpsertWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = makeSchema();
