// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema)]),
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional()
}).strict();
export const TenantMemberUpsertWithoutUpdatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberUpsertWithoutUpdatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpsertWithoutUpdatedActivitiesInput>;
export const TenantMemberUpsertWithoutUpdatedActivitiesInputObjectZodSchema = makeSchema();
