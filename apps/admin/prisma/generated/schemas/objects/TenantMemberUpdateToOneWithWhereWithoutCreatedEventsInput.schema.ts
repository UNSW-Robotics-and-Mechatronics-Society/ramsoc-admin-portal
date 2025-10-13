// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutCreatedEventsInputObjectSchema as TenantMemberUpdateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUpdateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInput>;
export const TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInputObjectZodSchema = makeSchema();
