// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateNestedOneWithoutActivitySessionCheckInsInput.schema';
import { ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema as ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateNestedOneWithoutCheckInsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  checkInTime: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema),
  activitySession: z.lazy(() => ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema)
}).strict();
export const ActivitySessionCheckInCreateWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateWithoutMemberInput>;
export const ActivitySessionCheckInCreateWithoutMemberInputObjectZodSchema = makeSchema();
