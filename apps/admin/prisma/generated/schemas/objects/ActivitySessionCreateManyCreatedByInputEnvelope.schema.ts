// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateManyCreatedByInputObjectSchema as ActivitySessionCreateManyCreatedByInputObjectSchema } from './ActivitySessionCreateManyCreatedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCreateManyCreatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateManyCreatedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCreateManyCreatedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateManyCreatedByInputEnvelope>;
export const ActivitySessionCreateManyCreatedByInputEnvelopeObjectZodSchema = makeSchema();
