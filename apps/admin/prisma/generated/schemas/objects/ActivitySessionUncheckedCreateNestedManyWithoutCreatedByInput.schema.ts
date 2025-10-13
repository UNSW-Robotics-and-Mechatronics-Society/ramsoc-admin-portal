// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutCreatedByInputObjectSchema as ActivitySessionCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCreatedByInput.schema';
import { ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema as ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutCreatedByInput.schema';
import { ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema as ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema } from './ActivitySessionCreateManyCreatedByInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInput>;
export const ActivitySessionUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
