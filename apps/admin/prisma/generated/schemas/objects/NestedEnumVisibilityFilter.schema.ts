// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema'

const nestedenumvisibilityfilterSchema = z.object({
  equals: VisibilitySchema.optional(),
  in: VisibilitySchema.array().optional(),
  notIn: VisibilitySchema.array().optional(),
  not: z.union([VisibilitySchema, z.lazy(() => NestedEnumVisibilityFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumVisibilityFilterObjectSchema: z.ZodType<Prisma.NestedEnumVisibilityFilter> = nestedenumvisibilityfilterSchema as unknown as z.ZodType<Prisma.NestedEnumVisibilityFilter>;
export const NestedEnumVisibilityFilterObjectZodSchema = nestedenumvisibilityfilterSchema;
