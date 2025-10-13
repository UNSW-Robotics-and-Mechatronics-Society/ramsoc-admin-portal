// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutTenantInputObjectSchema as ActivityCreateWithoutTenantInputObjectSchema } from './ActivityCreateWithoutTenantInput.schema';
import { ActivityUncheckedCreateWithoutTenantInputObjectSchema as ActivityUncheckedCreateWithoutTenantInputObjectSchema } from './ActivityUncheckedCreateWithoutTenantInput.schema';
import { ActivityCreateOrConnectWithoutTenantInputObjectSchema as ActivityCreateOrConnectWithoutTenantInputObjectSchema } from './ActivityCreateOrConnectWithoutTenantInput.schema';
import { ActivityCreateManyTenantInputEnvelopeObjectSchema as ActivityCreateManyTenantInputEnvelopeObjectSchema } from './ActivityCreateManyTenantInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivityCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivityCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateNestedManyWithoutTenantInput>;
export const ActivityCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
