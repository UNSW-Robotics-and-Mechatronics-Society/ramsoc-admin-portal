// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateOrConnectWithoutCreatedActivitiesInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantMemberCreateNestedOneWithoutCreatedActivitiesInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutCreatedActivitiesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedOneWithoutCreatedActivitiesInput>;
export const TenantMemberCreateNestedOneWithoutCreatedActivitiesInputObjectZodSchema = makeSchema();
