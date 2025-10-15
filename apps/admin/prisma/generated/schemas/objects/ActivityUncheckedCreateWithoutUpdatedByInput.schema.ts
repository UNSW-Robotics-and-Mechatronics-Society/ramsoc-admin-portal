// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { ActivityTypeUncheckedCreateNestedManyWithoutActivitiesInputObjectSchema as ActivityTypeUncheckedCreateNestedManyWithoutActivitiesInputObjectSchema } from './ActivityTypeUncheckedCreateNestedManyWithoutActivitiesInput.schema';
import { ActivitySessionUncheckedCreateNestedManyWithoutActivityInputObjectSchema as ActivitySessionUncheckedCreateNestedManyWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedCreateNestedManyWithoutActivityInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  eventId: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  slug: z.string(),
  coverImageUrl: z.string().optional().nullable(),
  visibility: VisibilitySchema.optional(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  createdById: z.string(),
  types: z.lazy(() => ActivityTypeUncheckedCreateNestedManyWithoutActivitiesInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionUncheckedCreateNestedManyWithoutActivityInputObjectSchema).optional()
}).strict();
export const ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedCreateWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedCreateWithoutUpdatedByInput>;
export const ActivityUncheckedCreateWithoutUpdatedByInputObjectZodSchema = makeSchema();
