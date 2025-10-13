// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUpsertWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUpsertWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUpsertWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutCreatedActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedActivitySessionsInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneRequiredWithoutCreatedActivitySessionsNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutCreatedActivitySessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutCreatedActivitySessionsNestedInput>;
export const TenantMemberUpdateOneRequiredWithoutCreatedActivitySessionsNestedInputObjectZodSchema = makeSchema();
