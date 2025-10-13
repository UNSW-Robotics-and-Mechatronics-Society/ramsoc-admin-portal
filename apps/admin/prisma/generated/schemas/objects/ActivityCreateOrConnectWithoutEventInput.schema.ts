// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutEventInputObjectSchema as ActivityCreateWithoutEventInputObjectSchema } from './ActivityCreateWithoutEventInput.schema';
import { ActivityUncheckedCreateWithoutEventInputObjectSchema as ActivityUncheckedCreateWithoutEventInputObjectSchema } from './ActivityUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityCreateWithoutEventInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const ActivityCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateOrConnectWithoutEventInput>;
export const ActivityCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
