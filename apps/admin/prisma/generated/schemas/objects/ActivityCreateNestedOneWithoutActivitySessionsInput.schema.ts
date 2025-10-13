// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutActivitySessionsInputObjectSchema as ActivityCreateWithoutActivitySessionsInputObjectSchema } from './ActivityCreateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedCreateWithoutActivitySessionsInput.schema';
import { ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema as ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema } from './ActivityCreateOrConnectWithoutActivitySessionsInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => ActivityWhereUniqueInputObjectSchema).optional()
}).strict();
export const ActivityCreateNestedOneWithoutActivitySessionsInputObjectSchema: z.ZodType<Prisma.ActivityCreateNestedOneWithoutActivitySessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateNestedOneWithoutActivitySessionsInput>;
export const ActivityCreateNestedOneWithoutActivitySessionsInputObjectZodSchema = makeSchema();
