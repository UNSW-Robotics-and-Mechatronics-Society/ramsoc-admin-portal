// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutUpdatedByInputObjectSchema as EventUncheckedUpdateManyWithoutUpdatedByInputObjectSchema } from './EventUncheckedUpdateManyWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateManyMutationInputObjectSchema), z.lazy(() => EventUncheckedUpdateManyWithoutUpdatedByInputObjectSchema)])
}).strict();
export const EventUpdateManyWithWhereWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithWhereWithoutUpdatedByInput>;
export const EventUpdateManyWithWhereWithoutUpdatedByInputObjectZodSchema = makeSchema();
