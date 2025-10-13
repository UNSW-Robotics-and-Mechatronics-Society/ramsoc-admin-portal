// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSessionCodeTypeFilterObjectSchema as NestedEnumSessionCodeTypeFilterObjectSchema } from './NestedEnumSessionCodeTypeFilter.schema'

const nestedenumsessioncodetypewithaggregatesfilterSchema = z.object({
  equals: SessionCodeTypeSchema.optional(),
  in: SessionCodeTypeSchema.array().optional(),
  notIn: SessionCodeTypeSchema.array().optional(),
  not: z.union([SessionCodeTypeSchema, z.lazy(() => NestedEnumSessionCodeTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSessionCodeTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSessionCodeTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumSessionCodeTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSessionCodeTypeWithAggregatesFilter> = nestedenumsessioncodetypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSessionCodeTypeWithAggregatesFilter>;
export const NestedEnumSessionCodeTypeWithAggregatesFilterObjectZodSchema = nestedenumsessioncodetypewithaggregatesfilterSchema;
