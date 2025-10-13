// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutCreatedEventsInputObjectSchema as TenantMemberUpdateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUpdateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedEventsInput.schema';
import { TenantMemberCreateWithoutCreatedEventsInputObjectSchema as TenantMemberCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedEventsInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutCreatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutCreatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutCreatedEventsInput>;
export const TenantMemberUpsertWithoutCreatedEventsInputObjectZodSchema = makeSchema();
