// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const activitysessioncheckinscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  activitySessionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  memberId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  checkInTime: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ActivitySessionCheckInScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInScalarWhereWithAggregatesInput> = activitysessioncheckinscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActivitySessionCheckInScalarWhereWithAggregatesInput>;
export const ActivitySessionCheckInScalarWhereWithAggregatesInputObjectZodSchema = activitysessioncheckinscalarwherewithaggregatesinputSchema;
