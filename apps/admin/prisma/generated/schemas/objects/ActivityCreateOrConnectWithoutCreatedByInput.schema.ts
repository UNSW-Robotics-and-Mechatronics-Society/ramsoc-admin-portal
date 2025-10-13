// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutCreatedByInputObjectSchema as ActivityCreateWithoutCreatedByInputObjectSchema } from './ActivityCreateWithoutCreatedByInput.schema';
import { ActivityUncheckedCreateWithoutCreatedByInputObjectSchema as ActivityUncheckedCreateWithoutCreatedByInputObjectSchema } from './ActivityUncheckedCreateWithoutCreatedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityCreateWithoutCreatedByInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutCreatedByInputObjectSchema)])
}).strict();
export const ActivityCreateOrConnectWithoutCreatedByInputObjectSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutCreatedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateOrConnectWithoutCreatedByInput>;
export const ActivityCreateOrConnectWithoutCreatedByInputObjectZodSchema = makeSchema();
