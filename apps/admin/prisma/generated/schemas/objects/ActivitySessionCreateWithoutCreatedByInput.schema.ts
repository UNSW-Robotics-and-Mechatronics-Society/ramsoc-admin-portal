// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { ActivityCreateNestedOneWithoutActivitySessionsInputObjectSchema as ActivityCreateNestedOneWithoutActivitySessionsInputObjectSchema } from './ActivityCreateNestedOneWithoutActivitySessionsInput.schema';
import { TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema as TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema } from './TenantCreateNestedOneWithoutActivitySessionsInput.schema';
import { TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInput.schema';
import { ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  updateDate: z.coerce.date().optional(),
  allowSelfCheckIn: z.boolean().optional(),
  activity: z.lazy(() => ActivityCreateNestedOneWithoutActivitySessionsInputObjectSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema),
  updatedBy: z.lazy(() => TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInputObjectSchema).optional(),
  checkIns: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInputObjectSchema).optional()
}).strict();
export const ActivitySessionCreateWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateWithoutCreatedByInput>;
export const ActivitySessionCreateWithoutCreatedByInputObjectZodSchema = makeSchema();
