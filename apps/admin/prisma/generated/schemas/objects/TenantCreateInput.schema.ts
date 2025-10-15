// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateNestedManyWithoutTenantInputObjectSchema as TenantMemberCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberCreateNestedManyWithoutTenantInput.schema';
import { EventCreateNestedManyWithoutTenantInputObjectSchema as EventCreateNestedManyWithoutTenantInputObjectSchema } from './EventCreateNestedManyWithoutTenantInput.schema';
import { ActivityCreateNestedManyWithoutTenantInputObjectSchema as ActivityCreateNestedManyWithoutTenantInputObjectSchema } from './ActivityCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateNestedManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  logo: z.string().optional().nullable(),
  siteUrl: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  createDate: z.coerce.date().optional(),
  tenantMembers: z.lazy(() => TenantMemberCreateNestedManyWithoutTenantInputObjectSchema),
  events: z.lazy(() => EventCreateNestedManyWithoutTenantInputObjectSchema),
  activities: z.lazy(() => ActivityCreateNestedManyWithoutTenantInputObjectSchema),
  activitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema)
}).strict();
export const TenantCreateInputObjectSchema: z.ZodType<Prisma.TenantCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateInput>;
export const TenantCreateInputObjectZodSchema = makeSchema();
