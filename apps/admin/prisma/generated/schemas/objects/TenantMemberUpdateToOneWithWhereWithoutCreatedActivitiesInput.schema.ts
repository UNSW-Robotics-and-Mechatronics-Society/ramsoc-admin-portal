// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUpdateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInput>;
export const TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInputObjectZodSchema = makeSchema();
