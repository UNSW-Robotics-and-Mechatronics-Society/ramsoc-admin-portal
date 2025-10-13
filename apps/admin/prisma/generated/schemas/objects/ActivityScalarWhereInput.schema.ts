// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVisibilityFilterObjectSchema as EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const activityscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  visibility: z.union([z.lazy(() => EnumVisibilityFilterObjectSchema), VisibilitySchema]).optional(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ActivityScalarWhereInputObjectSchema: z.ZodType<Prisma.ActivityScalarWhereInput> = activityscalarwhereinputSchema as unknown as z.ZodType<Prisma.ActivityScalarWhereInput>;
export const ActivityScalarWhereInputObjectZodSchema = activityscalarwhereinputSchema;
