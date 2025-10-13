// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventUpdateWithoutActivitiesInputObjectSchema as EventUpdateWithoutActivitiesInputObjectSchema } from './EventUpdateWithoutActivitiesInput.schema';
import { EventUncheckedUpdateWithoutActivitiesInputObjectSchema as EventUncheckedUpdateWithoutActivitiesInputObjectSchema } from './EventUncheckedUpdateWithoutActivitiesInput.schema';
import { EventCreateWithoutActivitiesInputObjectSchema as EventCreateWithoutActivitiesInputObjectSchema } from './EventCreateWithoutActivitiesInput.schema';
import { EventUncheckedCreateWithoutActivitiesInputObjectSchema as EventUncheckedCreateWithoutActivitiesInputObjectSchema } from './EventUncheckedCreateWithoutActivitiesInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutActivitiesInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutActivitiesInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutActivitiesInput>;
export const EventUpsertWithoutActivitiesInputObjectZodSchema = makeSchema();
