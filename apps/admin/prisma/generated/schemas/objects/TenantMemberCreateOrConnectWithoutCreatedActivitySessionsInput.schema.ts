// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInput>;
export const TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectZodSchema = makeSchema();
