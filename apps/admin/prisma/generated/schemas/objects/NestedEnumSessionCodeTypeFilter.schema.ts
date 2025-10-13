// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema'

const nestedenumsessioncodetypefilterSchema = z.object({
  equals: SessionCodeTypeSchema.optional(),
  in: SessionCodeTypeSchema.array().optional(),
  notIn: SessionCodeTypeSchema.array().optional(),
  not: z.union([SessionCodeTypeSchema, z.lazy(() => NestedEnumSessionCodeTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSessionCodeTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumSessionCodeTypeFilter> = nestedenumsessioncodetypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSessionCodeTypeFilter>;
export const NestedEnumSessionCodeTypeFilterObjectZodSchema = nestedenumsessioncodetypefilterSchema;
