// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitiesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema)])
}).strict();
export const TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUpdatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutUpdatedActivitiesInput>;
export const TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectZodSchema = makeSchema();
