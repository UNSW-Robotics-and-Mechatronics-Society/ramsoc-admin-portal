// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { NestedEnumSessionCodeTypeWithAggregatesFilterObjectSchema as NestedEnumSessionCodeTypeWithAggregatesFilterObjectSchema } from './NestedEnumSessionCodeTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSessionCodeTypeFilterObjectSchema as NestedEnumSessionCodeTypeFilterObjectSchema } from './NestedEnumSessionCodeTypeFilter.schema'

const makeSchema = () => z.object({
  equals: SessionCodeTypeSchema.optional(),
  in: SessionCodeTypeSchema.array().optional(),
  notIn: SessionCodeTypeSchema.array().optional(),
  not: z.union([SessionCodeTypeSchema, z.lazy(() => NestedEnumSessionCodeTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSessionCodeTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSessionCodeTypeFilterObjectSchema).optional()
}).strict();
export const EnumSessionCodeTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSessionCodeTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSessionCodeTypeWithAggregatesFilter>;
export const EnumSessionCodeTypeWithAggregatesFilterObjectZodSchema = makeSchema();
