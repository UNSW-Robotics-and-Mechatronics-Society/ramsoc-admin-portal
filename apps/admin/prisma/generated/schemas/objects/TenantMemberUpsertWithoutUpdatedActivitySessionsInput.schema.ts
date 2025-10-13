// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutUpdatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutUpdatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutUpdatedActivitySessionsInput>;
export const TenantMemberUpsertWithoutUpdatedActivitySessionsInputObjectZodSchema = makeSchema();
