// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutActivityInputObjectSchema as ActivitySessionCreateWithoutActivityInputObjectSchema } from './ActivitySessionCreateWithoutActivityInput.schema';
import { ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema as ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutActivityInput.schema';
import { ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema as ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutActivityInput.schema';
import { ActivitySessionCreateManyActivityInputEnvelopeObjectSchema as ActivitySessionCreateManyActivityInputEnvelopeObjectSchema } from './ActivitySessionCreateManyActivityInputEnvelope.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionCreateWithoutActivityInputObjectSchema).array(), z.lazy(() => ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCreateManyActivityInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCreateNestedManyWithoutActivityInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateNestedManyWithoutActivityInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateNestedManyWithoutActivityInput>;
export const ActivitySessionCreateNestedManyWithoutActivityInputObjectZodSchema = makeSchema();
