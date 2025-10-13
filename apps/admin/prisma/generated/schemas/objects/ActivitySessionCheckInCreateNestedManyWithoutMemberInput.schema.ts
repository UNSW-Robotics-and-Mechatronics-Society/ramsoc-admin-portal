// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateWithoutMemberInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutMemberInput.schema';
import { ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateOrConnectWithoutMemberInput.schema';
import { ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema as ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema } from './ActivitySessionCheckInCreateManyMemberInputEnvelope.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateWithoutMemberInputObjectSchema).array(), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ActivitySessionCheckInCreateManyMemberInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema), z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateNestedManyWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateNestedManyWithoutMemberInput>;
export const ActivitySessionCheckInCreateNestedManyWithoutMemberInputObjectZodSchema = makeSchema();
