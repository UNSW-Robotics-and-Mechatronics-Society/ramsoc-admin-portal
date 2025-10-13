// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema as TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutUpdatedActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInput>;
export const TenantMemberCreateNestedOneWithoutUpdatedActivitySessionsInputObjectZodSchema = makeSchema();
