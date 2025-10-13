// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityArgsObjectSchema as ActivityArgsObjectSchema } from './ActivityArgs.schema';
import { TenantArgsObjectSchema as TenantArgsObjectSchema } from './TenantArgs.schema';
import { TenantMemberArgsObjectSchema as TenantMemberArgsObjectSchema } from './TenantMemberArgs.schema';
import { ActivitySessionCheckInFindManySchema as ActivitySessionCheckInFindManySchema } from '../findManyActivitySessionCheckIn.schema';
import { ActivitySessionCountOutputTypeArgsObjectSchema as ActivitySessionCountOutputTypeArgsObjectSchema } from './ActivitySessionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  activity: z.union([z.boolean(), z.lazy(() => ActivityArgsObjectSchema)]).optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  createdBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  updatedBy: z.union([z.boolean(), z.lazy(() => TenantMemberArgsObjectSchema)]).optional(),
  checkIns: z.union([z.boolean(), z.lazy(() => ActivitySessionCheckInFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActivitySessionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActivitySessionIncludeObjectSchema: z.ZodType<Prisma.ActivitySessionInclude> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionInclude>;
export const ActivitySessionIncludeObjectZodSchema = makeSchema();
