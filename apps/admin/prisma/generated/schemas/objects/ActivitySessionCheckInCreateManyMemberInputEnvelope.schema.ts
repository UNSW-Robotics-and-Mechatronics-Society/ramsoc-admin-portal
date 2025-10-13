// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateManyMemberInputObjectSchema as ActivitySessionCheckInCreateManyMemberInputObjectSchema } from './ActivitySessionCheckInCreateManyMemberInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCheckInCreateManyMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateManyMemberInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyMemberInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyMemberInputEnvelope>;
export const ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectZodSchema = makeSchema();
