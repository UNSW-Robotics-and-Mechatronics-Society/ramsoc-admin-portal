// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateManyTenantInputObjectSchema as ActivitySessionCreateManyTenantInputObjectSchema } from './ActivitySessionCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ActivitySessionCreateManyTenantInputObjectSchema), z.lazy(() => ActivitySessionCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ActivitySessionCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.ActivitySessionCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateManyTenantInputEnvelope>;
export const ActivitySessionCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
