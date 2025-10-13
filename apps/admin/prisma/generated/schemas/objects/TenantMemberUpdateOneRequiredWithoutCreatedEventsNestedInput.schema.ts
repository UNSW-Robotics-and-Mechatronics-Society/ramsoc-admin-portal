// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutCreatedEventsInputObjectSchema as TenantMemberCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedCreateWithoutCreatedEventsInput.schema';
import { TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema as TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema } from './TenantMemberCreateOrConnectWithoutCreatedEventsInput.schema';
import { TenantMemberUpsertWithoutCreatedEventsInputObjectSchema as TenantMemberUpsertWithoutCreatedEventsInputObjectSchema } from './TenantMemberUpsertWithoutCreatedEventsInput.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInputObjectSchema as TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInputObjectSchema } from './TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInput.schema';
import { TenantMemberUpdateWithoutCreatedEventsInputObjectSchema as TenantMemberUpdateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUpdateWithoutCreatedEventsInput.schema';
import { TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema as TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutCreatedEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutCreatedEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantMemberCreateOrConnectWithoutCreatedEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantMemberUpsertWithoutCreatedEventsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateToOneWithWhereWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUpdateWithoutCreatedEventsInputObjectSchema), z.lazy(() => TenantMemberUncheckedUpdateWithoutCreatedEventsInputObjectSchema)]).optional()
}).strict();
export const TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInput>;
export const TenantMemberUpdateOneRequiredWithoutCreatedEventsNestedInputObjectZodSchema = makeSchema();
