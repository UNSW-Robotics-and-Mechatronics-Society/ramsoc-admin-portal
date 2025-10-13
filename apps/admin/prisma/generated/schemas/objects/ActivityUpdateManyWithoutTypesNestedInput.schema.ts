// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutTypesInputObjectSchema as ActivityCreateWithoutTypesInputObjectSchema } from './ActivityCreateWithoutTypesInput.schema';
import { ActivityUncheckedCreateWithoutTypesInputObjectSchema as ActivityUncheckedCreateWithoutTypesInputObjectSchema } from './ActivityUncheckedCreateWithoutTypesInput.schema';
import { ActivityCreateOrConnectWithoutTypesInputObjectSchema as ActivityCreateOrConnectWithoutTypesInputObjectSchema } from './ActivityCreateOrConnectWithoutTypesInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutTypesInputObjectSchema as ActivityUpsertWithWhereUniqueWithoutTypesInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutTypesInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutTypesInputObjectSchema as ActivityUpdateWithWhereUniqueWithoutTypesInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutTypesInput.schema';
import { ActivityUpdateManyWithWhereWithoutTypesInputObjectSchema as ActivityUpdateManyWithWhereWithoutTypesInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutTypesInput.schema';
import { ActivityScalarWhereInputObjectSchema as ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutTypesInputObjectSchema), z.lazy(() => ActivityCreateWithoutTypesInputObjectSchema).array(), z.lazy(() => ActivityUncheckedCreateWithoutTypesInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTypesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ActivityCreateOrConnectWithoutTypesInputObjectSchema), z.lazy(() => ActivityCreateOrConnectWithoutTypesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ActivityUpsertWithWhereUniqueWithoutTypesInputObjectSchema), z.lazy(() => ActivityUpsertWithWhereUniqueWithoutTypesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ActivityWhereUniqueInputObjectSchema), z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ActivityUpdateWithWhereUniqueWithoutTypesInputObjectSchema), z.lazy(() => ActivityUpdateWithWhereUniqueWithoutTypesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ActivityUpdateManyWithWhereWithoutTypesInputObjectSchema), z.lazy(() => ActivityUpdateManyWithWhereWithoutTypesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ActivityScalarWhereInputObjectSchema), z.lazy(() => ActivityScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ActivityUpdateManyWithoutTypesNestedInputObjectSchema: z.ZodType<Prisma.ActivityUpdateManyWithoutTypesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateManyWithoutTypesNestedInput>;
export const ActivityUpdateManyWithoutTypesNestedInputObjectZodSchema = makeSchema();
