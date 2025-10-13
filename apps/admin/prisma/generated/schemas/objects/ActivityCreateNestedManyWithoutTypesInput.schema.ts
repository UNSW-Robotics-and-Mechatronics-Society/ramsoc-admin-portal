// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutTypesInputObjectSchema as ActivityCreateWithoutTypesInputObjectSchema } from './ActivityCreateWithoutTypesInput.schema';
import { ActivityUncheckedCreateWithoutTypesInputObjectSchema as ActivityUncheckedCreateWithoutTypesInputObjectSchema } from './ActivityUncheckedCreateWithoutTypesInput.schema';
import { ActivityCreateOrConnectWithoutTypesInputObjectSchema as ActivityCreateOrConnectWithoutTypesInputObjectSchema } from './ActivityCreateOrConnectWithoutTypesInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutTypesInputObjectSchema), z.lazy(() => ActivityCreateWithoutTypesInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutTypesInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTypesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutTypesInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutTypesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ActivityCreateNestedManyWithoutTypesInputObjectSchema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateNestedManyWithoutTypesInput>;
export const ActivityCreateNestedManyWithoutTypesInputObjectZodSchema = makeSchema();
