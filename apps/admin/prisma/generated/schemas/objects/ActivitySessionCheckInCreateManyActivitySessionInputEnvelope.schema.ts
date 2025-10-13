// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateManyActivitySessionInputObjectSchema as ActivitySessionCheckInCreateManyActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateManyActivitySessionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCheckInCreateManyActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateManyActivitySessionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyActivitySessionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyActivitySessionInputEnvelope>;
export const ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectZodSchema = makeSchema();
