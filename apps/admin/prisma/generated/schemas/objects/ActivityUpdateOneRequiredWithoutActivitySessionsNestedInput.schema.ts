// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityCreateWithoutActivitySessionsInputObjectSchema as ActivityCreateWithoutActivitySessionsInputObjectSchema } from './ActivityCreateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedCreateWithoutActivitySessionsInput.schema';
import { ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema as ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema } from './ActivityCreateOrConnectWithoutActivitySessionsInput.schema';
import { ActivityUpsertWithoutActivitySessionsInputObjectSchema as ActivityUpsertWithoutActivitySessionsInputObjectSchema } from './ActivityUpsertWithoutActivitySessionsInput.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema as ActivityUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema } from './ActivityUpdateToOneWithWhereWithoutActivitySessionsInput.schema';
import { ActivityUpdateWithoutActivitySessionsInputObjectSchema as ActivityUpdateWithoutActivitySessionsInputObjectSchema } from './ActivityUpdateWithoutActivitySessionsInput.schema';
import { ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema as ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema } from './ActivityUncheckedUpdateWithoutActivitySessionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivityCreateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutActivitySessionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ActivityCreateOrConnectWithoutActivitySessionsInputObjectSchema).optional(),
  upsert: z.lazy(() => ActivityUpsertWithoutActivitySessionsInputObjectSchema).optional(),
  connect: z.lazy(() => ActivityWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ActivityUpdateToOneWithWhereWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUpdateWithoutActivitySessionsInputObjectSchema), z.lazy(() => ActivityUncheckedUpdateWithoutActivitySessionsInputObjectSchema)]).optional()
}).strict();
export const ActivityUpdateOneRequiredWithoutActivitySessionsNestedInputObjectSchema: z.ZodType<Prisma.ActivityUpdateOneRequiredWithoutActivitySessionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityUpdateOneRequiredWithoutActivitySessionsNestedInput>;
export const ActivityUpdateOneRequiredWithoutActivitySessionsNestedInputObjectZodSchema = makeSchema();
