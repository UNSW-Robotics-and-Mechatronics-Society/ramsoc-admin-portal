// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInput>;
export const TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInputObjectZodSchema = makeSchema();
