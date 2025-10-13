// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutEventInputObjectSchema as ActivityCreateWithoutEventInputObjectSchema } from './ActivityCreateWithoutEventInput.schema';
import { ActivityUncheckedCreateWithoutEventInputObjectSchema as ActivityUncheckedCreateWithoutEventInputObjectSchema } from './ActivityUncheckedCreateWithoutEventInput.schema';
import { ActivityCreateOrConnectWithoutEventInputObjectSchema as ActivityCreateOrConnectWithoutEventInputObjectSchema } from './ActivityCreateOrConnectWithoutEventInput.schema';
import { ActivityCreateManyEventInputEnvelopeObjectSchema as ActivityCreateManyEventInputEnvelopeObjectSchema } from './ActivityCreateManyEventInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutEventInputObjectSchema), z.lazy(() => ActivityCreateWithoutEventInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivityCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateNestedManyWithoutEventInput>;
export const ActivityCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
