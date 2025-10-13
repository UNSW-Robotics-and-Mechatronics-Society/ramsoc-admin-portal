// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCreateWithoutActivityInputObjectSchema as ActivitySessionCreateWithoutActivityInputObjectSchema } from './ActivitySessionCreateWithoutActivityInput.schema';
import { ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema as ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutActivityInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutActivityInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutActivityInputObjectSchema)])
}).strict();
export const ActivitySessionCreateOrConnectWithoutActivityInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutActivityInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutActivityInput>;
export const ActivitySessionCreateOrConnectWithoutActivityInputObjectZodSchema = makeSchema();
