// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { TenantCreateNestedOneWithoutActivitiesInputObjectSchema as TenantCreateNestedOneWithoutActivitiesInputObjectSchema } from './TenantCreateNestedOneWithoutActivitiesInput.schema';
import { EventCreateNestedOneWithoutActivitiesInputObjectSchema as EventCreateNestedOneWithoutActivitiesInputObjectSchema } from './EventCreateNestedOneWithoutActivitiesInput.schema';
import { TenantMemberCreateNestedOneWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateNestedOneWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateNestedOneWithoutUpdatedActivitiesInput.schema';
import { ActivityTypeCreateNestedManyWithoutActivitiesInputObjectSchema as ActivityTypeCreateNestedManyWithoutActivitiesInputObjectSchema } from './ActivityTypeCreateNestedManyWithoutActivitiesInput.schema';
import { ActivitySessionCreateNestedManyWithoutActivityInputObjectSchema as ActivitySessionCreateNestedManyWithoutActivityInputObjectSchema } from './ActivitySessionCreateNestedManyWithoutActivityInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutActivitiesInputObjectSchema),
  event: z.lazy(() => EventCreateNestedOneWithoutActivitiesInputObjectSchema),
  updatedBy: z.lazy(() => TenantMemberCreateNestedOneWithoutUpdatedActivitiesInputObjectSchema).optional(),
  types: z.lazy(() => ActivityTypeCreateNestedManyWithoutActivitiesInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutActivityInputObjectSchema).optional()
}).strict();
export const ActivityCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivityCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateWithoutCreatedByInput>;
export const ActivityCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
