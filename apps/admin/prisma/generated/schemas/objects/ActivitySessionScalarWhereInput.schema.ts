// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumVisibilityFilterObjectSchema as EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumSessionCodeTypeFilterObjectSchema as EnumSessionCodeTypeFilterObjectSchema } from './EnumSessionCodeTypeFilter.schema';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const activitysessionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivitySessionScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivitySessionScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  activityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  visibility: z.union([z.lazy(() => EnumVisibilityFilterObjectSchema), VisibilitySchema]).optional(),
  startTime: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  endTime: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  capacity: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  codeType: z.union([z.lazy(() => EnumSessionCodeTypeFilterObjectSchema), SessionCodeTypeSchema]).optional(),
  code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  codeValidFrom: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  codeValidTo: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  allowSelfCheckIn: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const ActivitySessionScalarWhereInputObjectSchema: z.ZodType<Prisma.ActivitySessionScalarWhereInput> = activitysessionscalarwhereinputSchema as unknown as z.ZodType<Prisma.ActivitySessionScalarWhereInput>;
export const ActivitySessionScalarWhereInputObjectZodSchema = activitysessionscalarwhereinputSchema;
