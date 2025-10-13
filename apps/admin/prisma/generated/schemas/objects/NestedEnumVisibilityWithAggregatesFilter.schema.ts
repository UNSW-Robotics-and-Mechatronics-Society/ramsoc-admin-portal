// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVisibilityFilterObjectSchema as NestedEnumVisibilityFilterObjectSchema } from './NestedEnumVisibilityFilter.schema'

const nestedenumvisibilitywithaggregatesfilterSchema = z.object({
  equals: VisibilitySchema.optional(),
  in: VisibilitySchema.array().optional(),
  notIn: VisibilitySchema.array().optional(),
  not: z.union([VisibilitySchema, z.lazy(() => NestedEnumVisibilityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumVisibilityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumVisibilityFilterObjectSchema).optional()
}).strict();
export const NestedEnumVisibilityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumVisibilityWithAggregatesFilter> = nestedenumvisibilitywithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumVisibilityWithAggregatesFilter>;
export const NestedEnumVisibilityWithAggregatesFilterObjectZodSchema = nestedenumvisibilitywithaggregatesfilterSchema;
