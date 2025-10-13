// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateManyUpdatedByInputObjectSchema as ActivityCreateManyUpdatedByInputObjectSchema } from './ActivityCreateManyUpdatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivityCreateManyUpdatedByInputObjectSchema), z.lazy(() => ActivityCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivityCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivityCreateManyUpdatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateManyUpdatedByInputEnvelope>;
export const ActivityCreateManyUpdatedByInputEnvelopeObjectZodSchema = makeSchema();
