// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberTypeSchema } from '../enums/TenantMemberType.schema';
import { TenantCreateNestedOneWithoutTenantMembersInputObjectSchema as TenantCreateNestedOneWithoutTenantMembersInputObjectSchema } from './TenantCreateNestedOneWithoutTenantMembersInput.schema';
import { UserCreateNestedOneWithoutTenantMembersInputObjectSchema as UserCreateNestedOneWithoutTenantMembersInputObjectSchema } from './UserCreateNestedOneWithoutTenantMembersInput.schema';
import { EventCreateNestedManyWithoutCreatedByInputObjectSchema as EventCreateNestedManyWithoutCreatedByInputObjectSchema } from './EventCreateNestedManyWithoutCreatedByInput.schema';
import { EventCreateNestedManyWithoutUpdatedByInputObjectSchema as EventCreateNestedManyWithoutUpdatedByInputObjectSchema } from './EventCreateNestedManyWithoutUpdatedByInput.schema';
import { ActivityCreateNestedManyWithoutCreatedByInputObjectSchema as ActivityCreateNestedManyWithoutCreatedByInputObjectSchema } from './ActivityCreateNestedManyWithoutCreatedByInput.schema';
import { ActivityCreateNestedManyWithoutUpdatedByInputObjectSchema as ActivityCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ActivityCreateNestedManyWithoutUpdatedByInput.schema';
import { ActivitySessionCreateNestedManyWithoutCreatedByInputObjectSchema as ActivitySessionCreateNestedManyWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateNestedManyWithoutCreatedByInput.schema';
import { ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: TenantMemberTypeSchema.optional(),
  isActive: z.boolean().optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutTenantMembersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantMembersInputObjectSchema),
  createdEvents: z.lazy(() => EventCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  updatedEvents: z.lazy(() => EventCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  createdActivities: z.lazy(() => ActivityCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  updatedActivities: z.lazy(() => ActivityCreateNestedManyWithoutUpdatedByInputObjectSchema).optional(),
  createdActivitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateWithoutUpdatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateWithoutUpdatedActivitySessionsInput>;
export const TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectZodSchema = makeSchema();
