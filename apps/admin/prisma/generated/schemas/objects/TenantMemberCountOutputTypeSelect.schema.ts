// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  createdEvents: z.boolean().optional(),
  updatedEvents: z.boolean().optional(),
  createdActivities: z.boolean().optional(),
  updatedActivities: z.boolean().optional(),
  createdActivitySessions: z.boolean().optional(),
  updatedActivitySessions: z.boolean().optional(),
  ActivitySessionCheckIn: z.boolean().optional()
}).strict();
export const TenantMemberCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TenantMemberCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCountOutputTypeSelect>;
export const TenantMemberCountOutputTypeSelectObjectZodSchema = makeSchema();
