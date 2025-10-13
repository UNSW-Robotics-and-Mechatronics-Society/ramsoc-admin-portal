// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutUpdatedByInputObjectSchema as ActivityCreateWithoutUpdatedByInputObjectSchema } from './ActivityCreateWithoutUpdatedByInput.schema';
import { ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutUpdatedByInput.schema';
import { ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema as ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ActivityCreateOrConnectWithoutUpdatedByInput.schema';
import { ActivityCreateManyUpdatedByInputEnvelopeObjectSchema as ActivityCreateManyUpdatedByInputEnvelopeObjectSchema } from './ActivityCreateManyUpdatedByInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityCreateWithoutUpdatedByInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyUpdatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUncheckedCreateNestedManyWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutUpdatedByInput>;
export const ActivityUncheckedCreateNestedManyWithoutUpdatedByInputObjectZodSchema = makeSchema();
