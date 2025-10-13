// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutCreatedEventsInputObjectSchema as TenantMemberCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedEventsInput.schema';
import { TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema as TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutCreatedEventsInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutCreatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutCreatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutCreatedEventsInput>;
export const TenantMemberCreateNestedOneWithoutCreatedEventsInputObjectZodSchema = makeSchema();
