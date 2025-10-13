// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateManyUserInputObjectSchema as TenantMemberCreateManyUserInputObjectSchema } from './TenantMemberCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantMemberCreateManyUserInputObjectSchema), z.lazy(() => TenantMemberCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantMemberCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantMemberCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateManyUserInputEnvelope>;
export const TenantMemberCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
