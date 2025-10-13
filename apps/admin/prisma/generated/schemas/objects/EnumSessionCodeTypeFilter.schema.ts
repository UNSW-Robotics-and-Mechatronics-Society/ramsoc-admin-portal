// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { NestedEnumSessionCodeTypeFilterObjectSchema as NestedEnumSessionCodeTypeFilterObjectSchema } from './NestedEnumSessionCodeTypeFilter.schema'

const makeSchema = () => z.object({
  equals: SessionCodeTypeSchema.optional(),
  in: SessionCodeTypeSchema.array().optional(),
  notIn: SessionCodeTypeSchema.array().optional(),
  not: z.union([SessionCodeTypeSchema, z.lazy(() => NestedEnumSessionCodeTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumSessionCodeTypeFilterObjectSchema: z.ZodType<Prisma.EnumSessionCodeTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSessionCodeTypeFilter>;
export const EnumSessionCodeTypeFilterObjectZodSchema = makeSchema();
