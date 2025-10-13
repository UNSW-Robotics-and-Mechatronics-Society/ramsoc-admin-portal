// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateManyTenantInputObjectSchema as EventCreateManyTenantInputObjectSchema } from './EventCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EventCreateManyTenantInputObjectSchema), z.lazy(() => EventCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EventCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyTenantInputEnvelope>;
export const EventCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
