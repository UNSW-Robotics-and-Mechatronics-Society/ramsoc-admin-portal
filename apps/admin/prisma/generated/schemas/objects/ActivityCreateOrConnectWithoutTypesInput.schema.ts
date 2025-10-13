// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutTypesInputObjectSchema as ActivityCreateWithoutTypesInputObjectSchema } from './ActivityCreateWithoutTypesInput.schema';
import { ActivityUncheckedCreateWithoutTypesInputObjectSchema as ActivityUncheckedCreateWithoutTypesInputObjectSchema } from './ActivityUncheckedCreateWithoutTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityCreateWithoutTypesInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTypesInputObjectSchema)])
}).strict();
export const ActivityCreateOrConnectWithoutTypesInputObjectSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateOrConnectWithoutTypesInput>;
export const ActivityCreateOrConnectWithoutTypesInputObjectZodSchema = makeSchema();
