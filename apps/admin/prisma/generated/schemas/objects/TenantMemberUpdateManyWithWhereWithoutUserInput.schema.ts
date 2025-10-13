// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberScalarWhereInputObjectSchema as TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema as TenantMemberUpdateManyMutationInputObjectSchema } from './TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutUserInputObjectSchema as TenantMemberUncheckedUpdateManyWithoutUserInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantMemberUpdateManyMutationInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TenantMemberUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutUserInput>;
export const TenantMemberUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
