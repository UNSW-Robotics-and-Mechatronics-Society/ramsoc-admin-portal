// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema)])
}).strict();
export const TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInput>;
export const TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInputObjectZodSchema = makeSchema();
