// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema as TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema as TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { ActivitySessionScalarRelationFilterObjectSchema as ActivitySessionScalarRelationFilterObjectSchema } from './ActivitySessionScalarRelationFilter.schema';
import { ActivitySessionWhereInputObjectSchema as ActivitySessionWhereInputObjectSchema } from './ActivitySessionWhereInput.schema';
import { TenantMemberScalarRelationFilterObjectSchema as TenantMemberScalarRelationFilterObjectSchema } from './TenantMemberScalarRelationFilter.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const activitysessioncheckinwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  activitySessionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  checkInTime: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  activitySession: z.union([z.lazy(() => ActivitySessionScalarRelationFilterObjectSchema), z.lazy(() => ActivitySessionWhereInputObjectSchema)]).optional(),
  member: z.union([z.lazy(() => TenantMemberScalarRelationFilterObjectSchema), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional()
}).strict();
export const ActivitySessionCheckInWhereInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInWhereInput> = activitysessioncheckinwhereinputSchema as unknown as z.ZodType<Prisma.ActivitySessionCheckInWhereInput>;
export const ActivitySessionCheckInWhereInputObjectZodSchema = activitysessioncheckinwhereinputSchema;
