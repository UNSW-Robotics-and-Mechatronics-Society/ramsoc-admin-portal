// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutCreatedByInputObjectSchema as EventUpdateWithoutCreatedByInputObjectSchema } from './EventUpdateWithoutCreatedByInput.schema';
import { EventUncheckedUpdateWithoutCreatedByInputObjectSchema as EventUncheckedUpdateWithoutCreatedByInputObjectSchema } from './EventUncheckedUpdateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateWithoutCreatedByInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutCreatedByInputObjectSchema)])
}).strict();
export const EventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutCreatedByInput>;
export const EventUpdateWithWhereUniqueWithoutCreatedByInputObjectZodSchema = makeSchema();
