// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUpdatedEventsInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutUpdatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutUpdatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutUpdatedEventsInput>;
export const TenantMemberCreateNestedOneWithoutUpdatedEventsInputObjectZodSchema = makeSchema();
