// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutActivitiesInputObjectSchema as EventCreateWithoutActivitiesInputObjectSchema } from './EventCreateWithoutActivitiesInput.schema';
import { EventUncheckedCreateWithoutActivitiesInputObjectSchema as EventUncheckedCreateWithoutActivitiesInputObjectSchema } from './EventUncheckedCreateWithoutActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutActivitiesInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutActivitiesInput>;
export const EventCreateOrConnectWithoutActivitiesInputObjectZodSchema = makeSchema();
