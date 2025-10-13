// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutActivitiesInputObjectSchema as EventUpdateWithoutActivitiesInputObjectSchema } from './EventUpdateWithoutActivitiesInput.schema';
import { EventUncheckedUpdateWithoutActivitiesInputObjectSchema as EventUncheckedUpdateWithoutActivitiesInputObjectSchema } from './EventUncheckedUpdateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutActivitiesInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutActivitiesInput>;
export const EventUpdateToOneWithWhereWithoutActivitiesInputObjectZodSchema = makeSchema();
