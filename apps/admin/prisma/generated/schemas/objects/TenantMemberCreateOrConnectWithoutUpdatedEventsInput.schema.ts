// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUpdatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUpdatedEventsInput>;
export const TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectZodSchema = makeSchema();
