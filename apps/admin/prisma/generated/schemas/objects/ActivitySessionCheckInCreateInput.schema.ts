// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateNestedOneWithoutActivitySessionCheckInsInput.schema';
import { ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema as ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateNestedOneWithoutCheckInsInput.schema';
import { TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateNestedOneWithoutActivitySessionCheckInInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  checkInTime: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema),
  activitySession: z.lazy(() => ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema),
  member: z.lazy(() => TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema)
}).strict();
export const ActivitySessionCheckInCreateInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateInput>;
export const ActivitySessionCheckInCreateInputObjectZodSchema = makeSchema();
