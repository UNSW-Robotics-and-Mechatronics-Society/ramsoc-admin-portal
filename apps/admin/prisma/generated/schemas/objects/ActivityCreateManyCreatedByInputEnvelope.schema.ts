// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateManyCreatedByInputObjectSchema as ActivityCreateManyCreatedByInputObjectSchema } from './ActivityCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivityCreateManyCreatedByInputObjectSchema), z.lazy(() => ActivityCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivityCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivityCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateManyCreatedByInputEnvelope>;
export const ActivityCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
