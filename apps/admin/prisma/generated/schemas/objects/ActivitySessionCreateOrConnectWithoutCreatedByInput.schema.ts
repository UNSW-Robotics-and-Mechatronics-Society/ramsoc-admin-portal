// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCreateWithoutCreatedByInputObjectSchema as ActivitySessionCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionCreateWithoutCreatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivitySessionCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutCreatedByInput>;
export const ActivitySessionCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
