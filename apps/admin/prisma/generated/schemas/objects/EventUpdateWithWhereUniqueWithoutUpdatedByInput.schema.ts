// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutUpdatedByInputObjectSchema as EventUpdateWithoutUpdatedByInputObjectSchema } from './EventUpdateWithoutUpdatedByInput.schema';
import { EventUncheckedUpdateWithoutUpdatedByInputObjectSchema as EventUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './EventUncheckedUpdateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const EventUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutUpdatedByInput>;
export const EventUpdateWithWhereUniqueWithoutUpdatedByInputObjectZodSchema = makeSchema();
