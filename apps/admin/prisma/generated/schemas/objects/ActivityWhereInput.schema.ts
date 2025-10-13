// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVisibilityFilterObjectSchema as EnumVisibilityFilterObjectSchema } from './EnumVisibilityFilter.schema';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema as TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { TenantMemberScalarRelationFilterObjectSchema as TenantMemberScalarRelationFilterObjectSchema } from './TenantMemberScalarRelationFilter.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberNullableScalarRelationFilterObjectSchema as TenantMemberNullableScalarRelationFilterObjectSchema } from './TenantMemberNullableScalarRelationFilter.schema';
import { ActivityTypeListRelationFilterObjectSchema as ActivityTypeListRelationFilterObjectSchema } from './ActivityTypeListRelationFilter.schema';
import { ActivitySessionListRelationFilterObjectSchema as ActivitySessionListRelationFilterObjectSchema } from './ActivitySessionListRelationFilter.schema'

const activitywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivityWhereInputObjectSchema), z.lazy(() => ActivityWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivityWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivityWhereInputObjectSchema), z.lazy(() => ActivityWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  visibility: z.union([z.lazy(() => EnumVisibilityFilterObjectSchema), VisibilitySchema]).optional(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  updatedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  event: z.union([z.lazy(() => EventScalarRelationFilterObjectSchema), z.lazy(() => EventWhereInputObjectSchema)]).optional(),
  createdBy: z.union([z.lazy(() => TenantMemberScalarRelationFilterObjectSchema), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  updatedBy: z.union([z.lazy(() => TenantMemberNullableScalarRelationFilterObjectSchema), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  types: z.lazy(() => ActivityTypeListRelationFilterObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionListRelationFilterObjectSchema).optional()
}).strict();
export const ActivityWhereInputObjectSchema: z.ZodType<Prisma.ActivityWhereInput> = activitywhereinputSchema as unknown as z.ZodType<Prisma.ActivityWhereInput>;
export const ActivityWhereInputObjectZodSchema = activitywhereinputSchema;
