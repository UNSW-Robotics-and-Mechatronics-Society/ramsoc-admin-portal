// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema as TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInput>;
export const TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInputObjectZodSchema = makeSchema();
