// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateManyUpdatedByInputObjectSchema as EventCreateManyUpdatedByInputObjectSchema } from './EventCreateManyUpdatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCreateManyUpdatedByInputObjectSchema), z.lazy(() => EventCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCreateManyUpdatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyUpdatedByInputEnvelope>;
export const EventCreateManyUpdatedByInputEnvelopeObjectZodSchema = makeSchema();
