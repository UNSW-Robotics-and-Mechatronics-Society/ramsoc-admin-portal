// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutActivitySessionsInputObjectSchema as ActivityCreateWithoutActivitySessionsInputObjectSchema } from './ActivityCreateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedCreateWithoutActivitySessionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema)])
}).strict();
export const ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateOrConnectWithoutActivitySessionsInput>;
export const ActivityCreateOrConnectWithoutActivitySessionsInputObjectZodSchema = makeSchema();
