// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantId: z.string(),
  activitySessionId: z.string(),
  checkInTime: z.date()
}).strict();
export const ActivitySessionCheckInTenantIdActivitySessionIdCheckInTimeCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInTenantIdActivitySessionIdCheckInTimeCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInTenantIdActivitySessionIdCheckInTimeCompoundUniqueInput>;
export const ActivitySessionCheckInTenantIdActivitySessionIdCheckInTimeCompoundUniqueInputObjectZodSchema = makeSchema();
