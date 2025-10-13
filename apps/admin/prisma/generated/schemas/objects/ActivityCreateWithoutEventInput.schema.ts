// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { TenantCreateNestedOneWithoutActivitiesInputObjectSchema as TenantCreateNestedOneWithoutActivitiesInputObjectSchema } from './TenantCreateNestedOneWithoutActivitiesInput.schema';
import { TenantMemberCreateNestedOneWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateNestedOneWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateNestedOneWithoutCreatedActivitiesInput.schema';
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
  createdBy: z.lazy(() => TenantMemberCreateNestedOneWithoutCreatedActivitiesInputObjectSchema),
  updatedBy: z.lazy(() => TenantMemberCreateNestedOneWithoutUpdatedActivitiesInputObjectSchema).optional(),
  types: z.lazy(() => ActivityTypeCreateNestedManyWithoutActivitiesInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutActivityInputObjectSchema).optional()
}).strict();
export const ActivityCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateWithoutEventInput>;
export const ActivityCreateWithoutEventInputObjectZodSchema = makeSchema();
