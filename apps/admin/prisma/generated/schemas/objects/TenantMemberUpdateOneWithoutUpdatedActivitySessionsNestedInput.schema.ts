// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUpsertWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUpsertWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUpsertWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutUpdatedActivitySessionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedActivitySessionsInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneWithoutUpdatedActivitySessionsNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneWithoutUpdatedActivitySessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneWithoutUpdatedActivitySessionsNestedInput>;
export const TenantMemberUpdateOneWithoutUpdatedActivitySessionsNestedInputObjectZodSchema = makeSchema();
