// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { EventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as EventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { EventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema as EventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ActivityUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as ActivityUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ActivityUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema as ActivityUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedCreateNestedManyWithoutUpdatedByInput.schema';
import { ActivitySessionCheckInUncheckedCreateNestedManyWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  userId: z.string(),
  type: TenantMemberTypeSchema.optional(),
  isActive: z.boolean().optional(),
  createDate: z.coerce.date().optional(),
  createdEvents: z.lazy(() => EventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema),
  updatedEvents: z.lazy(() => EventUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema),
  createdActivities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema),
  updatedActivities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema),
  createdActivitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema),
  updatedActivitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInUncheckedCreateNestedManyWithoutMemberInputObjectSchema)
}).strict();
export const TenantMemberUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantMemberUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUncheckedCreateInput>;
export const TenantMemberUncheckedCreateInputObjectZodSchema = makeSchema();
