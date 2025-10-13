// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema';
import { ActivityFindManySchema as ActivityFindManySchema } from '../findManyActivity.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  coverImageUrl: z.boolean().optional(),
  siteUrl: z.boolean().optional(),
  description: z.boolean().optional(),
  visibility: z.boolean().optional(),
  createdById: z.boolean().optional(),
  updatedById: z.boolean().optional(),
  createDate: z.boolean().optional(),
  updateDate: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  activities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventSelectObjectSchema: z.ZodType<Prisma.EventSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventSelect>;
export const EventSelectObjectZodSchema = makeSchema();
