// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutActivitiesInputObjectSchema as EventCreateWithoutActivitiesInputObjectSchema } from './EventCreateWithoutActivitiesInput.schema';
import { EventUncheckedCreateWithoutActivitiesInputObjectSchema as EventUncheckedCreateWithoutActivitiesInputObjectSchema } from './EventUncheckedCreateWithoutActivitiesInput.schema';
import { EventCreateOrConnectWithoutActivitiesInputObjectSchema as EventCreateOrConnectWithoutActivitiesInputObjectSchema } from './EventCreateOrConnectWithoutActivitiesInput.schema';
import { EventUpsertWithoutActivitiesInputObjectSchema as EventUpsertWithoutActivitiesInputObjectSchema } from './EventUpsertWithoutActivitiesInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutActivitiesInputObjectSchema as EventUpdateToOneWithWhereWithoutActivitiesInputObjectSchema } from './EventUpdateToOneWithWhereWithoutActivitiesInput.schema';
import { EventUpdateWithoutActivitiesInputObjectSchema as EventUpdateWithoutActivitiesInputObjectSchema } from './EventUpdateWithoutActivitiesInput.schema';
import { EventUncheckedUpdateWithoutActivitiesInputObjectSchema as EventUncheckedUpdateWithoutActivitiesInputObjectSchema } from './EventUncheckedUpdateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutActivitiesInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutActivitiesInputObjectSchema), z.lazy(() => EventUpdateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutActivitiesInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneRequiredWithoutActivitiesNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutActivitiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneRequiredWithoutActivitiesNestedInput>;
export const EventUpdateOneRequiredWithoutActivitiesNestedInputObjectZodSchema = makeSchema();
