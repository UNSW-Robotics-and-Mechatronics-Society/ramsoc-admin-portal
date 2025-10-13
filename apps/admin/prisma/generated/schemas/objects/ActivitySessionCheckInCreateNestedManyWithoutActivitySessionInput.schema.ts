// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema as ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema } from './ActivitySessionCheckInCreateManyActivitySessionInputEnvelope.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema).array(), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCheckInCreateManyActivitySessionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInput>;
export const ActivitySessionCheckInCreateNestedManyWithoutActivitySessionInputObjectZodSchema = makeSchema();
