// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInput>;
export const TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInputObjectZodSchema = makeSchema();
