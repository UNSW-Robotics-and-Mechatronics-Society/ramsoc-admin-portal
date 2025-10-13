// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutCreatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutCreatedActivitiesInput>;
export const TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectZodSchema = makeSchema();
