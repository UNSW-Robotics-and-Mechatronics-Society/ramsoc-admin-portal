// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateOrConnectWithoutTenantInput.schema';
import { ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema as ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema } from './ActivitySessionCheckInCreateManyTenantInputEnvelope.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCheckInCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateNestedManyWithoutTenantInput>;
export const ActivitySessionCheckInCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
