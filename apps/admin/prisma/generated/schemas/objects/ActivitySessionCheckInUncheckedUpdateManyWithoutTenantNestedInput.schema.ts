// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateOrConnectWithoutTenantInput.schema';
import { ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInputObjectSchema as ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema as ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema } from './ActivitySessionCheckInCreateManyTenantInputEnvelope.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInputObjectSchema as ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInputObjectSchema as ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInput.schema';
import { ActivitySessionCheckInScalarWhereInputObjectSchema as ActivitySessionCheckInScalarWhereInputObjectSchema } from './ActivitySessionCheckInScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCheckInUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutTenantNestedInput>;
export const ActivitySessionCheckInUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
