// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantMembers: z.boolean().optional(),
  events: z.boolean().optional(),
  activities: z.boolean().optional(),
  activitySessions: z.boolean().optional(),
  activitySessionCheckIns: z.boolean().optional()
}).strict();
export const TenantCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantCountOutputTypeSelect>;
export const TenantCountOutputTypeSelectObjectZodSchema = makeSchema();
