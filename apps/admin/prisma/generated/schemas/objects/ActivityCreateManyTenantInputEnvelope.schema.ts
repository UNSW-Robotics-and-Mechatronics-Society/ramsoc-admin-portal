// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateManyTenantInputObjectSchema as ActivityCreateManyTenantInputObjectSchema } from './ActivityCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivityCreateManyTenantInputObjectSchema), z.lazy(() => ActivityCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivityCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivityCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateManyTenantInputEnvelope>;
export const ActivityCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
