// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedActivitiesInput.schema';
import { TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema as TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberCreateOrConnectWithoutCreatedActivitiesInput.schema';
import { TenantMemberUpsertWithoutCreatedActivitiesInputObjectSchema as TenantMemberUpsertWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUpsertWithoutCreatedActivitiesInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInput.schema';
import { TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUpdateWithoutCreatedActivitiesInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedActivitiesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutCreatedActivitiesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutCreatedActivitiesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutCreatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedActivitiesInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInput>;
export const TenantMemberUpdateOneRequiredWithoutCreatedActivitiesNestedInputObjectZodSchema = makeSchema();
