// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema as ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateNestedOneWithoutCheckInsInput.schema';
import { TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateNestedOneWithoutActivitySessionCheckInInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  checkInTime: z.coerce.date().optional(),
  activitySession: z.lazy(() => ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema),
  member: z.lazy(() => TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema)
}).strict();
export const ActivitySessionCheckInCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateWithoutTenantInput>;
export const ActivitySessionCheckInCreateWithoutTenantInputObjectZodSchema = makeSchema();
