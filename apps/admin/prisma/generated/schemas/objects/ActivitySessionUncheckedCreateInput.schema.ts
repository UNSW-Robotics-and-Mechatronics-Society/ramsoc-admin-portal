// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { ActivitySessionCheckInUncheckedCreateNestedManyWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedCreateNestedManyWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateNestedManyWithoutActivitySessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  activityId: z.string(),
  visibility: VisibilitySchema.optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  location: z.string().optional().nullable(),
  capacity: z.number().int().optional().nullable(),
  codeType: SessionCodeTypeSchema.optional(),
  code: z.string().optional().nullable(),
  codeValidFrom: z.coerce.date().optional().nullable(),
  codeValidTo: z.coerce.date().optional().nullable(),
  createDate: z.coerce.date().optional(),
  createdById: z.string(),
  updatedById: z.string().optional().nullable(),
  allowSelfCheckIn: z.boolean().optional(),
  checkIns: z.lazy(() => ActivitySessionCheckInUncheckedCreateNestedManyWithoutActivitySessionInputObjectSchema)
}).strict();
export const ActivitySessionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ActivitySessionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUncheckedCreateInput>;
export const ActivitySessionUncheckedCreateInputObjectZodSchema = makeSchema();
