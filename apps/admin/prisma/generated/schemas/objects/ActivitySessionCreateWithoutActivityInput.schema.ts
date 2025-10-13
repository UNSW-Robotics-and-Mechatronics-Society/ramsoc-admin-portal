// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VisibilitySchema } from '../enums/Visibility.schema';
import { SessionCodeTypeSchema } from '../enums/SessionCodeType.schema';
import { TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema as TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema } from './TenantCreateNestedOneWithoutActivitySessionsInput.schema';
import { TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInput.schema';
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
  tenant: z.lazy(() => TenantCreateNestedOneWithoutActivitySessionsInputObjectSchema),
  createdBy: z.lazy(() => TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInputObjectSchema),
  updatedBy: z.lazy(() => TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInputObjectSchema).optional(),
  checkIns: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInputObjectSchema).optional()
}).strict();
export const ActivitySessionCreateWithoutActivityInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateWithoutActivityInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateWithoutActivityInput>;
export const ActivitySessionCreateWithoutActivityInputObjectZodSchema = makeSchema();
