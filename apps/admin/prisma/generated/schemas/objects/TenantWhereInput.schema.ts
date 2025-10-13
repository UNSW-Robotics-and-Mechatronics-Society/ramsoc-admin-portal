// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantMemberListRelationFilterObjectSchema as TenantMemberListRelationFilterObjectSchema } from './TenantMemberListRelationFilter.schema';
import { EventListRelationFilterObjectSchema as EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { ActivityListRelationFilterObjectSchema as ActivityListRelationFilterObjectSchema } from './ActivityListRelationFilter.schema';
import { ActivitySessionListRelationFilterObjectSchema as ActivitySessionListRelationFilterObjectSchema } from './ActivitySessionListRelationFilter.schema';
import { ActivitySessionCheckInListRelationFilterObjectSchema as ActivitySessionCheckInListRelationFilterObjectSchema } from './ActivitySessionCheckInListRelationFilter.schema'

const tenantwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantWhereInputObjectSchema), z.lazy(() => TenantWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  logo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  siteUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenantMembers: z.lazy(() => TenantMemberListRelationFilterObjectSchema).optional(),
  events: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  activities: z.lazy(() => ActivityListRelationFilterObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionListRelationFilterObjectSchema).optional(),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInListRelationFilterObjectSchema).optional()
}).strict();
export const TenantWhereInputObjectSchema: z.ZodType<Prisma.TenantWhereInput> = tenantwhereinputSchema as unknown as z.ZodType<Prisma.TenantWhereInput>;
export const TenantWhereInputObjectZodSchema = tenantwhereinputSchema;
