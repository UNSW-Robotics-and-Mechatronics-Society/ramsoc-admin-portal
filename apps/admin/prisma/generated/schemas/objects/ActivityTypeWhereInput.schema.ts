// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ActivityListRelationFilterObjectSchema as ActivityListRelationFilterObjectSchema } from './ActivityListRelationFilter.schema'

const activitytypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityTypeWhereInputObjectSchema), z.lazy(() => ActivityTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityTypeWhereInputObjectSchema), z.lazy(() => ActivityTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  activities: z.lazy(() => ActivityListRelationFilterObjectSchema).optional()
}).strict();
export const ActivityTypeWhereInputObjectSchema: z.ZodType<Prisma.ActivityTypeWhereInput> = activitytypewhereinputSchema as unknown as z.ZodType<Prisma.ActivityTypeWhereInput>;
export const ActivityTypeWhereInputObjectZodSchema = activitytypewhereinputSchema;
