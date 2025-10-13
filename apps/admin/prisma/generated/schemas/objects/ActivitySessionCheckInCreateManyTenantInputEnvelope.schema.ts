// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateManyTenantInputObjectSchema as ActivitySessionCheckInCreateManyTenantInputObjectSchema } from './ActivitySessionCheckInCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCheckInCreateManyTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateManyTenantInputEnvelope>;
export const ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
