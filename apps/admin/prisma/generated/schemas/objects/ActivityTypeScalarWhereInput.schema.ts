// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const activitytypescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityTypeScalarWhereInputObjectSchema), z.lazy(() => ActivityTypeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityTypeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityTypeScalarWhereInputObjectSchema), z.lazy(() => ActivityTypeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ActivityTypeScalarWhereInputObjectSchema: z.ZodType<Prisma.ActivityTypeScalarWhereInput> = activitytypescalarwhereinputSchema as unknown as z.ZodType<Prisma.ActivityTypeScalarWhereInput>;
export const ActivityTypeScalarWhereInputObjectZodSchema = activitytypescalarwhereinputSchema;
