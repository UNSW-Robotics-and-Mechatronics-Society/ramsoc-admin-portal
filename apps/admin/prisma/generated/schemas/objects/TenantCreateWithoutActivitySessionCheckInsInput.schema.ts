// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateNestedManyWithoutTenantInputObjectSchema as TenantMemberCreateNestedManyWithoutTenantInputObjectSchema } from './TenantMemberCreateNestedManyWithoutTenantInput.schema';
import { EventCreateNestedManyWithoutTenantInputObjectSchema as EventCreateNestedManyWithoutTenantInputObjectSchema } from './EventCreateNestedManyWithoutTenantInput.schema';
import { ActivityCreateNestedManyWithoutTenantInputObjectSchema as ActivityCreateNestedManyWithoutTenantInputObjectSchema } from './ActivityCreateNestedManyWithoutTenantInput.schema';
import { ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema as ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema } from './ActivitySessionCreateNestedManyWithoutTenantInput.schema'

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
  activitySessions: z.lazy(() => ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema).optional()
}).strict();
export const TenantCreateWithoutActivitySessionCheckInsInputObjectSchema: z.ZodType<Prisma.TenantCreateWithoutActivitySessionCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateWithoutActivitySessionCheckInsInput>;
export const TenantCreateWithoutActivitySessionCheckInsInputObjectZodSchema = makeSchema();
