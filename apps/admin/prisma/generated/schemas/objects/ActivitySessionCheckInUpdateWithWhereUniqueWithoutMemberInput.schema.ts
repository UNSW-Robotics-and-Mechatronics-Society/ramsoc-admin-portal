// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema as ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUpdateWithoutMemberInput.schema';
import { ActivitySessionCheckInUncheckedUpdateWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedUpdateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionCheckInUpdateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateWithoutMemberInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInput>;
export const ActivitySessionCheckInUpdateWithWhereUniqueWithoutMemberInputObjectZodSchema = makeSchema();
