// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutUserInputObjectSchema as TenantMemberUpdateWithoutUserInputObjectSchema } from './TenantMemberUpdateWithoutUserInput.schema';
import { TenantMemberUncheckedUpdateWithoutUserInputObjectSchema as TenantMemberUncheckedUpdateWithoutUserInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUserInput.schema';
import { TenantMemberCreateWithoutUserInputObjectSchema as TenantMemberCreateWithoutUserInputObjectSchema } from './TenantMemberCreateWithoutUserInput.schema';
import { TenantMemberUncheckedCreateWithoutUserInputObjectSchema as TenantMemberUncheckedCreateWithoutUserInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TenantMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithWhereUniqueWithoutUserInput>;
export const TenantMemberUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
