// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { NestedEnumVisibilityWithAggregatesFilterObjectSchema as NestedEnumVisibilityWithAggregatesFilterObjectSchema } from './NestedEnumVisibilityWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVisibilityFilterObjectSchema as NestedEnumVisibilityFilterObjectSchema } from './NestedEnumVisibilityFilter.schema'

const makeSchema = () => z.object({
  equals: VisibilitySchema.optional(),
  in: VisibilitySchema.array().optional(),
  notIn: VisibilitySchema.array().optional(),
  not: z.union([VisibilitySchema, z.lazy(() => NestedEnumVisibilityWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumVisibilityFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumVisibilityFilterObjectSchema).optional()
}).strict();
export const EnumVisibilityWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumVisibilityWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVisibilityWithAggregatesFilter>;
export const EnumVisibilityWithAggregatesFilterObjectZodSchema = makeSchema();
