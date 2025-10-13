// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutUserInputObjectSchema as TenantMemberUpdateWithoutUserInputObjectSchema } from './TenantMemberUpdateWithoutUserInput.schema';
import { TenantMemberUncheckedUpdateWithoutUserInputObjectSchema as TenantMemberUncheckedUpdateWithoutUserInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TenantMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutUserInput>;
export const TenantMemberUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
