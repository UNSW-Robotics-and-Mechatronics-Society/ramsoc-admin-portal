// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCreateWithoutUpdatedByInputObjectSchema as ActivitySessionCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionCreateWithoutUpdatedByInput.schema';
import { ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutUpdatedByInput>;
export const ActivitySessionCreateOrConnectWithoutUpdatedByInputObjectZodSchema = makeSchema();
