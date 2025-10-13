// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutCreatedByInputObjectSchema as EventUpdateWithoutCreatedByInputObjectSchema } from './EventUpdateWithoutCreatedByInput.schema';
import { EventUncheckedUpdateWithoutCreatedByInputObjectSchema as EventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EventUncheckedUpdateWithoutCreatedByInput.schema';
import { EventCreateWithoutCreatedByInputObjectSchema as EventCreateWithoutCreatedByInputObjectSchema } from './EventCreateWithoutCreatedByInput.schema';
import { EventUncheckedCreateWithoutCreatedByInputObjectSchema as EventUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => EventUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutCreatedByInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutCreatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const EventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutCreatedByInput>;
export const EventUpsertWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
