// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTenantMemberTypeFilterObjectSchema as EnumTenantMemberTypeFilterObjectSchema } from './EnumTenantMemberTypeFilter.schema';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema as TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { EventListRelationFilterObjectSchema as EventListRelationFilterObjectSchema } from './EventListRelationFilter.schema';
import { ActivityListRelationFilterObjectSchema as ActivityListRelationFilterObjectSchema } from './ActivityListRelationFilter.schema';
import { ActivitySessionListRelationFilterObjectSchema as ActivitySessionListRelationFilterObjectSchema } from './ActivitySessionListRelationFilter.schema';
import { ActivitySessionCheckInListRelationFilterObjectSchema as ActivitySessionCheckInListRelationFilterObjectSchema } from './ActivitySessionCheckInListRelationFilter.schema'

const tenantmemberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantMemberWhereInputObjectSchema), z.lazy(() => TenantMemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantMemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantMemberWhereInputObjectSchema), z.lazy(() => TenantMemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumTenantMemberTypeFilterObjectSchema), TenantMemberTypeSchema]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updateDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  createdEvents: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  updatedEvents: z.lazy(() => EventListRelationFilterObjectSchema).optional(),
  createdActivities: z.lazy(() => ActivityListRelationFilterObjectSchema).optional(),
  updatedActivities: z.lazy(() => ActivityListRelationFilterObjectSchema).optional(),
  createdActivitySessions: z.lazy(() => ActivitySessionListRelationFilterObjectSchema).optional(),
  updatedActivitySessions: z.lazy(() => ActivitySessionListRelationFilterObjectSchema).optional(),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInListRelationFilterObjectSchema).optional()
}).strict();
export const TenantMemberWhereInputObjectSchema: z.ZodType<Prisma.TenantMemberWhereInput> = tenantmemberwhereinputSchema as unknown as z.ZodType<Prisma.TenantMemberWhereInput>;
export const TenantMemberWhereInputObjectZodSchema = tenantmemberwhereinputSchema;
