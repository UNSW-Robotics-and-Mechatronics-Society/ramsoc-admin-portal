// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateManyActivityInputObjectSchema as ActivitySessionCreateManyActivityInputObjectSchema } from './ActivitySessionCreateManyActivityInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCreateManyActivityInputObjectSchema), z.lazy(() => ActivitySessionCreateManyActivityInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCreateManyActivityInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCreateManyActivityInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateManyActivityInputEnvelope>;
export const ActivitySessionCreateManyActivityInputEnvelopeObjectZodSchema = makeSchema();
