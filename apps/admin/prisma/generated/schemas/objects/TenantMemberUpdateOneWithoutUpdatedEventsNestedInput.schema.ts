// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUpdatedEventsInput.schema';
import { TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema as TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUpdatedEventsInput.schema';
import { TenantMemberUpsertWithoutUpdatedEventsInputObjectSchema as TenantMemberUpsertWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUpsertWithoutUpdatedEventsInput.schema';
import { TenantMemberWhereInputObjectSchema as TenantMemberWhereInputObjectSchema } from './TenantMemberWhereInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInput.schema';
import { TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema as TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUpdateWithoutUpdatedEventsInput.schema';
import { TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema as TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutUpdatedEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUpdatedEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutUpdatedEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutUpdatedEventsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TenantMemberWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutUpdatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutUpdatedEventsInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneWithoutUpdatedEventsNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneWithoutUpdatedEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneWithoutUpdatedEventsNestedInput>;
export const TenantMemberUpdateOneWithoutUpdatedEventsNestedInputObjectZodSchema = makeSchema();
