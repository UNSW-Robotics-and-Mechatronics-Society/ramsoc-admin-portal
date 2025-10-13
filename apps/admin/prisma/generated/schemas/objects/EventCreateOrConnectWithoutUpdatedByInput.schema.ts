// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutUpdatedByInputObjectSchema as EventCreateWithoutUpdatedByInputObjectSchema } from './EventCreateWithoutUpdatedByInput.schema';
import { EventUncheckedCreateWithoutUpdatedByInputObjectSchema as EventUncheckedCreateWithoutUpdatedByInputObjectSchema } from './EventUncheckedCreateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutUpdatedByInput>;
export const EventCreateOrConnectWithoutUpdatedByInputObjectZodSchema = makeSchema();
