// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateManyTenantInputObjectSchema as TenantMemberCreateManyTenantInputObjectSchema } from './TenantMemberCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantMemberCreateManyTenantInputObjectSchema), z.lazy(() => TenantMemberCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantMemberCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantMemberCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateManyTenantInputEnvelope>;
export const TenantMemberCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
