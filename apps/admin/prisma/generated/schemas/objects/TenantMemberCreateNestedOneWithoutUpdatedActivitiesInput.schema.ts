// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUpdatedActivitiesInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutUpdatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutUpdatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutUpdatedActivitiesInput>;
export const TenantMemberCreateNestedOneWithoutUpdatedActivitiesInputObjectZodSchema = makeSchema();
