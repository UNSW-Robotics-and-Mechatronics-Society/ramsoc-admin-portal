// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumVisibilityWithAggregatesFilterObjectSchema as EnumVisibilityWithAggregatesFilterObjectSchema } from './EnumVisibilityWithAggregatesFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumSessionCodeTypeWithAggregatesFilterObjectSchema as EnumSessionCodeTypeWithAggregatesFilterObjectSchema } from './EnumSessionCodeTypeWithAggregatesFilter.schema';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const activitysessionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivitySessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivitySessionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivitySessionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  activityId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityWithAggregatesFilterObjectSchema), VisibilitySchema]).optional(),
  startTime: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  endTime: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  capacity: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  codeType: z.union([z.lazy(() => EnumSessionCodeTypeWithAggregatesFilterObjectSchema), SessionCodeTypeSchema]).optional(),
  code: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  codeValidFrom: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  codeValidTo: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  updatedById: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  allowSelfCheckIn: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ActivitySessionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ActivitySessionScalarWhereWithAggregatesInput> = activitysessionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ActivitySessionScalarWhereWithAggregatesInput>;
export const ActivitySessionScalarWhereWithAggregatesInputObjectZodSchema = activitysessionscalarwherewithaggregatesinputSchema;
