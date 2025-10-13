// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutActivitiesInputObjectSchema as EventCreateWithoutActivitiesInputObjectSchema } from './EventCreateWithoutActivitiesInput.schema';
import { EventUncheckedCreateWithoutActivitiesInputObjectSchema as EventUncheckedCreateWithoutActivitiesInputObjectSchema } from './EventUncheckedCreateWithoutActivitiesInput.schema';
import { EventCreateOrConnectWithoutActivitiesInputObjectSchema as EventCreateOrConnectWithoutActivitiesInputObjectSchema } from './EventCreateOrConnectWithoutActivitiesInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutActivitiesInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional()
}).strict();
export const EventCreateNestedOneWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutActivitiesInput>;
export const EventCreateNestedOneWithoutActivitiesInputObjectZodSchema = makeSchema();
