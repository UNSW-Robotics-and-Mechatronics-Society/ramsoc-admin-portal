// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutUpdatedByInputObjectSchema as ActivitySessionCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutUpdatedByInput.schema';
import { ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema as ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutUpdatedByInput.schema';
import { ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema as ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema } from './ActivitySessionCreateManyUpdatedByInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateNestedManyWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateNestedManyWithoutUpdatedByInput>;
export const ActivitySessionCreateNestedManyWithoutUpdatedByInputObjectZodSchema = makeSchema();
