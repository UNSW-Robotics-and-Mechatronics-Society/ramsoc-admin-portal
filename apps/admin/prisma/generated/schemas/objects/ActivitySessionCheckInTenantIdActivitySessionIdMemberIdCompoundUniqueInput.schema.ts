// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantId: z.string(),
  activitySessionId: z.string(),
  memberId: z.string()
}).strict();
export const ActivitySessionCheckInTenantIdActivitySessionIdMemberIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInTenantIdActivitySessionIdMemberIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInTenantIdActivitySessionIdMemberIdCompoundUniqueInput>;
export const ActivitySessionCheckInTenantIdActivitySessionIdMemberIdCompoundUniqueInputObjectZodSchema = makeSchema();
