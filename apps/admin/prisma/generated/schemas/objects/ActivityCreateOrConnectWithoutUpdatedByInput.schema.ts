// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutUpdatedByInputObjectSchema as ActivityCreateWithoutUpdatedByInputObjectSchema } from './ActivityCreateWithoutUpdatedByInput.schema';
import { ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema as ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutUpdatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityCreateWithoutUpdatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutUpdatedByInputObjectSchema)])
}).strict();
export const ActivityCreateOrConnectWithoutUpdatedByInputObjectSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutUpdatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateOrConnectWithoutUpdatedByInput>;
export const ActivityCreateOrConnectWithoutUpdatedByInputObjectZodSchema = makeSchema();
