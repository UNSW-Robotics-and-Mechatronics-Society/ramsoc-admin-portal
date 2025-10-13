// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInCreateWithoutActivitySessionInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutActivitySessionInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutActivitySessionInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInput>;
export const ActivitySessionCheckInCreateOrConnectWithoutActivitySessionInputObjectZodSchema = makeSchema();
