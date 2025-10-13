// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutTenantInputObjectSchema as ActivitySessionCreateWithoutTenantInputObjectSchema } from './ActivitySessionCreateWithoutTenantInput.schema';
import { ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutTenantInput.schema';
import { ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema as ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutTenantInput.schema';
import { ActivitySessionCreateManyTenantInputEnvelopeObjectSchema as ActivitySessionCreateManyTenantInputEnvelopeObjectSchema } from './ActivitySessionCreateManyTenantInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateNestedManyWithoutTenantInput>;
export const ActivitySessionCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
