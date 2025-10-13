// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutCreatedEventsInputObjectSchema as TenantMemberCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutCreatedEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutCreatedEventsInput>;
export const TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectZodSchema = makeSchema();
