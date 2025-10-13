// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const activitytypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivityTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivityTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ActivityTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActivityTypeScalarWhereWithAggregatesInput> = activitytypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActivityTypeScalarWhereWithAggregatesInput>;
export const ActivityTypeScalarWhereWithAggregatesInputObjectZodSchema = activitytypescalarwherewithaggregatesinputSchema;
