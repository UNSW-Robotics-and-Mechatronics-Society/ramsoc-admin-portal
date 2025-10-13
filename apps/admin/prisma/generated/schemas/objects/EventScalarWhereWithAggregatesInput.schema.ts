// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumVisibilityWithAggregatesFilterObjectSchema as EnumVisibilityWithAggregatesFilterObjectSchema } from './EnumVisibilityWithAggregatesFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const eventscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  coverImageUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  siteUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  visibility: z.union([z.lazy(() => EnumVisibilityWithAggregatesFilterObjectSchema), VisibilitySchema]).optional(),
  createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  createDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const EventScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> = eventscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EventScalarWhereWithAggregatesInput>;
export const EventScalarWhereWithAggregatesInputObjectZodSchema = eventscalarwherewithaggregatesinputSchema;
