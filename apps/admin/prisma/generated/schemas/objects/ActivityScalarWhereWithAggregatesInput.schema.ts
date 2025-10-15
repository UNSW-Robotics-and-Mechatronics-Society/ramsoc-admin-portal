// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumVisibilityWithAggregatesFilterObjectSchema as EnumVisibilityWithAggregatesFilterObjectSchema } from './EnumVisibilityWithAggregatesFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const activityscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  coverImageUrl: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  visibility: z.union([z.lazy(() => EnumVisibilityWithAggregatesFilterObjectSchema), VisibilitySchema]).optional(),
  createDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ActivityScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActivityScalarWhereWithAggregatesInput> = activityscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActivityScalarWhereWithAggregatesInput>;
export const ActivityScalarWhereWithAggregatesInputObjectZodSchema = activityscalarwherewithaggregatesinputSchema;
