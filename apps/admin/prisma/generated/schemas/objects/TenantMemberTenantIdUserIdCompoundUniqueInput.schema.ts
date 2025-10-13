// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantId: z.string(),
  userId: z.string()
}).strict();
export const TenantMemberTenantIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TenantMemberTenantIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberTenantIdUserIdCompoundUniqueInput>;
export const TenantMemberTenantIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
