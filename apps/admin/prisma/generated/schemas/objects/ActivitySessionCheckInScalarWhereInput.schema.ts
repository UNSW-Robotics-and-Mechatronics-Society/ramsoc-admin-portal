// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const activitysessioncheckinscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  activitySessionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  checkInTime: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ActivitySessionCheckInScalarWhereInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInScalarWhereInput> = activitysessioncheckinscalarwhereinputSchema as unknown as z.ZodType<Prisma.ActivitySessionCheckInScalarWhereInput>;
export const ActivitySessionCheckInScalarWhereInputObjectZodSchema = activitysessioncheckinscalarwhereinputSchema;
