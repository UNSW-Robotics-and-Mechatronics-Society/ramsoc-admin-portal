// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutCreatedByInputObjectSchema as ActivityCreateWithoutCreatedByInputObjectSchema } from './ActivityCreateWithoutCreatedByInput.schema';
import { ActivityUncheckedCreateWithoutCreatedByInputObjectSchema as ActivityUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutCreatedByInput.schema';
import { ActivityCreateOrConnectWithoutCreatedByInputObjectSchema as ActivityCreateOrConnectWithoutCreatedByInputObjectSchema } from './ActivityCreateOrConnectWithoutCreatedByInput.schema';
import { ActivityCreateManyCreatedByInputEnvelopeObjectSchema as ActivityCreateManyCreatedByInputEnvelopeObjectSchema } from './ActivityCreateManyCreatedByInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityCreateWithoutCreatedByInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutCreatedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedCreateNestedManyWithoutCreatedByInput>;
export const ActivityUncheckedCreateNestedManyWithoutCreatedByInputObjectZodSchema = makeSchema();
