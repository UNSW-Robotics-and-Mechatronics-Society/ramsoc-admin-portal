// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateNestedManyWithoutTenantInputObjectSchema as TenantMemberCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberCreateNestedManyWithoutTenantInput.schema';
import { EventCreateNestedManyWithoutTenantInputObjectSchema as EventCreateNestedManyWithoutTenantInputObjectSchema } from './EventCreateNestedManyWithoutTenantInput.schema';
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
  updateDate: z.coerce.date().optional(),
  tenantMembers: z.lazy(() => TenantMemberCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema).optional(),
  activitySessionCheckIns: z.lazy(() => ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateWithoutActivitiesInputObjectSchema: z.ZodType<Prisma.TenantCreateWithoutActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateWithoutActivitiesInput>;
export const TenantCreateWithoutActivitiesInputObjectZodSchema = makeSchema();
