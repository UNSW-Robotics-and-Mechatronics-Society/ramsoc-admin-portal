// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateManyEventInputObjectSchema as ActivityCreateManyEventInputObjectSchema } from './ActivityCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivityCreateManyEventInputObjectSchema), z.lazy(() => ActivityCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivityCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivityCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateManyEventInputEnvelope>;
export const ActivityCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
