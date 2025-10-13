// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutTenantInputObjectSchema as ActivitySessionCreateWithoutTenantInputObjectSchema } from './ActivitySessionCreateWithoutTenantInput.schema';
import { ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutTenantInput.schema';
import { ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema as ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutTenantInput.schema';
import { ActivitySessionUpsertWithWhereUniqueWithoutTenantInputObjectSchema as ActivitySessionUpsertWithWhereUniqueWithoutTenantInputObjectSchema } from './ActivitySessionUpsertWithWhereUniqueWithoutTenantInput.schema';
import { ActivitySessionCreateManyTenantInputEnvelopeObjectSchema as ActivitySessionCreateManyTenantInputEnvelopeObjectSchema } from './ActivitySessionCreateManyTenantInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateWithWhereUniqueWithoutTenantInputObjectSchema as ActivitySessionUpdateWithWhereUniqueWithoutTenantInputObjectSchema } from './ActivitySessionUpdateWithWhereUniqueWithoutTenantInput.schema';
import { ActivitySessionUpdateManyWithWhereWithoutTenantInputObjectSchema as ActivitySessionUpdateManyWithWhereWithoutTenantInputObjectSchema } from './ActivitySessionUpdateManyWithWhereWithoutTenantInput.schema';
import { ActivitySessionScalarWhereInputObjectSchema as ActivitySessionScalarWhereInputObjectSchema } from './ActivitySessionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUpsertWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyTenantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUpdateWithWhereUniqueWithoutTenantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUpdateManyWithWhereWithoutTenantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionUncheckedUpdateManyWithoutTenantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUncheckedUpdateManyWithoutTenantNestedInput>;
export const ActivitySessionUncheckedUpdateManyWithoutTenantNestedInputObjectZodSchema = makeSchema();
