// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema as TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema } from './TenantCreateNestedOneWithoutActivitySessionCheckInsInput.schema';
import { TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema as TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema } from './TenantMemberCreateNestedOneWithoutActivitySessionCheckInInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  checkInTime: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutActivitySessionCheckInsInputObjectSchema),
  member: z.lazy(() => TenantMemberCreateNestedOneWithoutActivitySessionCheckInInputObjectSchema)
}).strict();
export const ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateWithoutActivitySessionInput>;
export const ActivitySessionCheckInCreateWithoutActivitySessionInputObjectZodSchema = makeSchema();
