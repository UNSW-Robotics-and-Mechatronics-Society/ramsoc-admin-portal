// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateNestedManyWithoutTenantInputObjectSchema as TenantMemberCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberCreateNestedManyWithoutTenantInput.schema';
import { EventCreateNestedManyWithoutTenantInputObjectSchema as EventCreateNestedManyWithoutTenantInputObjectSchema } from './EventCreateNestedManyWithoutTenantInput.schema';
import { ActivityCreateNestedManyWithoutTenantInputObjectSchema as ActivityCreateNestedManyWithoutTenantInputObjectSchema } from './ActivityCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  logo: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  updateDate: z.coerce.date().optional(),
  tenantMembers: z.lazy(() => TenantMemberCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activities: z.lazy(() => ActivityCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantCreateWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateWithoutActivitySessionsInput>;
export const TenantCreateWithoutActivitySessionsInputObjectZodSchema = makeSchema();
