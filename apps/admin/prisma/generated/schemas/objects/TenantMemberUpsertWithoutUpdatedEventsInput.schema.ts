// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema as TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedEventsInput.schema';
import { TenantMemberCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutUpdatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutUpdatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutUpdatedEventsInput>;
export const TenantMemberUpsertWithoutUpdatedEventsInputObjectZodSchema = makeSchema();
