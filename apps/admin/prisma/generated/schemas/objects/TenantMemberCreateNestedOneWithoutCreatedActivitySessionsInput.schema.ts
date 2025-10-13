// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema as TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitySessionsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutCreatedActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInput>;
export const TenantMemberCreateNestedOneWithoutCreatedActivitySessionsInputObjectZodSchema = makeSchema();
