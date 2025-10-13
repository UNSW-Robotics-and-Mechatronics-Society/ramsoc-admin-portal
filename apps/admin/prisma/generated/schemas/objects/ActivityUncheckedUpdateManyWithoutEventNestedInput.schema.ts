// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutEventInputObjectSchema as ActivityCreateWithoutEventInputObjectSchema } from './ActivityCreateWithoutEventInput.schema';
import { ActivityUncheckedCreateWithoutEventInputObjectSchema as ActivityUncheckedCreateWithoutEventInputObjectSchema } from './ActivityUncheckedCreateWithoutEventInput.schema';
import { ActivityCreateOrConnectWithoutEventInputObjectSchema as ActivityCreateOrConnectWithoutEventInputObjectSchema } from './ActivityCreateOrConnectWithoutEventInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutEventInputObjectSchema as ActivityUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutEventInput.schema';
import { ActivityCreateManyEventInputEnvelopeObjectSchema as ActivityCreateManyEventInputEnvelopeObjectSchema } from './ActivityCreateManyEventInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutEventInputObjectSchema as ActivityUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutEventInput.schema';
import { ActivityUpdateManyWithWhereWithoutEventInputObjectSchema as ActivityUpdateManyWithWhereWithoutEventInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutEventInput.schema';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutEventInputObjectSchema), z.lazy(() => ActivityCreateWithoutEventInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivityUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => ActivityUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivityCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivityUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => ActivityUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivityUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => ActivityUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUncheckedUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUncheckedUpdateManyWithoutEventNestedInput>;
export const ActivityUncheckedUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
