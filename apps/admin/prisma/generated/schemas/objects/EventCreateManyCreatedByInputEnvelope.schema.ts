// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateManyCreatedByInputObjectSchema as EventCreateManyCreatedByInputObjectSchema } from './EventCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCreateManyCreatedByInputObjectSchema), z.lazy(() => EventCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyCreatedByInputEnvelope>;
export const EventCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
