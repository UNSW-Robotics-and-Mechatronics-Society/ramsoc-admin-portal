// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInCreateWithoutMemberInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutMemberInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutMemberInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateOrConnectWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateOrConnectWithoutMemberInput>;
export const ActivitySessionCheckInCreateOrConnectWithoutMemberInputObjectZodSchema = makeSchema();
