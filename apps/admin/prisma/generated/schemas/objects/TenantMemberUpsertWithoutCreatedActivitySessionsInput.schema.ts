// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutCreatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutCreatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutCreatedActivitySessionsInput>;
export const TenantMemberUpsertWithoutCreatedActivitySessionsInputObjectZodSchema = makeSchema();
