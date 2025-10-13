// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateWithoutMemberInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutMemberInput.schema';
import { ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateOrConnectWithoutMemberInput.schema';
import { ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInputObjectSchema as ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInput.schema';
import { ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema as ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema } from './ActivitySessionCheckInCreateManyMemberInputEnvelope.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInputObjectSchema as ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInput.schema';
import { ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInputObjectSchema as ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInput.schema';
import { ActivitySessionCheckInScalarWhereInputObjectSchema as ActivitySessionCheckInScalarWhereInputObjectSchema } from './ActivitySessionCheckInScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateWithoutMemberInputObjectSchema).array(), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema), z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInput>;
export const ActivitySessionCheckInUncheckedUpdateManyWithoutMemberNestedInputObjectZodSchema = makeSchema();
