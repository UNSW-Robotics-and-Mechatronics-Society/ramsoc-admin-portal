// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUpdateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedActivitiesInput.schema';
import { TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutCreatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutCreatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutCreatedActivitiesInput>;
export const TenantMemberUpsertWithoutCreatedActivitiesInputObjectZodSchema = makeSchema();
