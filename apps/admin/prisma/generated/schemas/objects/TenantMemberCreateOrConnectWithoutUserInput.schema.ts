// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutUserInputObjectSchema as TenantMemberCreateWithoutUserInputObjectSchema } from './TenantMemberCreateWithoutUserInput.schema';
import { TenantMemberUncheckedCreateWithoutUserInputObjectSchema as TenantMemberUncheckedCreateWithoutUserInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUserInput>;
export const TenantMemberCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
