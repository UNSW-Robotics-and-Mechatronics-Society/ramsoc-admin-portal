// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateManyUpdatedByInputObjectSchema as ActivitySessionCreateManyUpdatedByInputObjectSchema } from './ActivitySessionCreateManyUpdatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCreateManyUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateManyUpdatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCreateManyUpdatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateManyUpdatedByInputEnvelope>;
export const ActivitySessionCreateManyUpdatedByInputEnvelopeObjectZodSchema = makeSchema();
