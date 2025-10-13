// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema';
import { ActivityFindManySchema as ActivityFindManySchema } from '../findManyActivity.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  activities: z.union([z.boolean(), z.lazy(() => ActivityFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventIncludeObjectSchema: z.ZodType<Prisma.EventInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventInclude>;
export const EventIncludeObjectZodSchema = makeSchema();
