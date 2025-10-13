// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberScalarWhereInputObjectSchema as TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema as TenantMemberUpdateManyMutationInputObjectSchema } from './TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutTenantInputObjectSchema as TenantMemberUncheckedUpdateManyWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantMemberUpdateManyMutationInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutTenantInput>;
export const TenantMemberUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
