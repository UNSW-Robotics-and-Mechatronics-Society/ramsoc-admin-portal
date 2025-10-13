// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutCreatedByInputObjectSchema as EventCreateWithoutCreatedByInputObjectSchema } from './EventCreateWithoutCreatedByInput.schema';
import { EventUncheckedCreateWithoutCreatedByInputObjectSchema as EventUncheckedCreateWithoutCreatedByInputObjectSchema } from './EventUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutCreatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutCreatedByInput>;
export const EventCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
