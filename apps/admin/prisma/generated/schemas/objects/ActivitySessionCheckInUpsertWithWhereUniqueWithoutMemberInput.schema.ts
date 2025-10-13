// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema as ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUpdateWithoutMemberInput.schema';
import { ActivitySessionCheckInUncheckedUpdateWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedUpdateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateWithoutMemberInput.schema';
import { ActivitySessionCheckInCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateWithoutMemberInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateWithoutMemberInputObjectSchema)]),
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInput>;
export const ActivitySessionCheckInUpsertWithWhereUniqueWithoutMemberInputObjectZodSchema = makeSchema();
