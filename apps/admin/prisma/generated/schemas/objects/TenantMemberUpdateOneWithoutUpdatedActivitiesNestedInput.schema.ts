// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema as TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUpsertWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUpsertWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUpsertWithoutUpdatedActivitiesInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedActivitiesInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedActivitiesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutUpdatedActivitiesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutUpdatedActivitiesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutUpdatedActivitiesInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedActivitiesInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInput>;
export const TenantMemberUpdateOneWithoutUpdatedActivitiesNestedInputObjectZodSchema = makeSchema();
