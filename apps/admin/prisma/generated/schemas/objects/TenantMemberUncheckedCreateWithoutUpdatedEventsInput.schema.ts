// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { EventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema as EventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutCreatedByInput.schema';
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
  updateDate: z.coerce.date().optional(),
  createdEvents: z.lazy(() => EventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  createdActivities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  updatedActivities: z.lazy(() => ActivityUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  createdActivitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  updatedActivitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInUncheckedCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberUncheckedCreateWithoutUpdatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUncheckedCreateWithoutUpdatedEventsInput>;
export const TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectZodSchema = makeSchema();
