// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInput>;
export const TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectZodSchema = makeSchema();
