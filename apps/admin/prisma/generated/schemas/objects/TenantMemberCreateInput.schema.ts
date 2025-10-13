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
import { ActivitySessionCreateNestedManyWithoutUpdatedByInputObjectSchema as ActivitySessionCreateNestedManyWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateNestedManyWithoutUpdatedByInput.schema';
import { ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: TenantMemberTypeSchema.optional(),
  isActive: z.boolean().optional(),
  createDate: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutTenantMembersInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantMembersInputObjectSchema),
  createdEvents: z.lazy(() => EventCreateNestedManyWithoutCreatedByInputObjectSchema),
  updatedEvents: z.lazy(() => EventCreateNestedManyWithoutUpdatedByInputObjectSchema),
  createdActivities: z.lazy(() => ActivityCreateNestedManyWithoutCreatedByInputObjectSchema),
  updatedActivities: z.lazy(() => ActivityCreateNestedManyWithoutUpdatedByInputObjectSchema),
  createdActivitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutCreatedByInputObjectSchema),
  updatedActivitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutUpdatedByInputObjectSchema),
  ActivitySessionCheckIn: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema)
}).strict();
export const TenantMemberCreateInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateInput>;
export const TenantMemberCreateInputObjectZodSchema = makeSchema();
