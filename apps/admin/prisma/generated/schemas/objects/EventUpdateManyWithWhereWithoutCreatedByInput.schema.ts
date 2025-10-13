// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutCreatedByInputObjectSchema as EventUncheckedUpdateManyWithoutCreatedByInputObjectSchema } from './EventUncheckedUpdateManyWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateManyMutationInputObjectSchema), z.lazy(() => EventUncheckedUpdateManyWithoutCreatedByInputObjectSchema)])
}).strict();
export const EventUpdateManyWithWhereWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithWhereWithoutCreatedByInput>;
export const EventUpdateManyWithWhereWithoutCreatedByInputObjectZodSchema = makeSchema();
