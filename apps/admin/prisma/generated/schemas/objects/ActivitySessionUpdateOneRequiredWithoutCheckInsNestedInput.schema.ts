// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutCheckInsInputObjectSchema as ActivitySessionCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCheckInsInput.schema';
import { ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema as ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutCheckInsInput.schema';
import { ActivitySessionUpsertWithoutCheckInsInputObjectSchema as ActivitySessionUpsertWithoutCheckInsInputObjectSchema } from './ActivitySessionUpsertWithoutCheckInsInput.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionUpdateToOneWithWhereWithoutCheckInsInputObjectSchema as ActivitySessionUpdateToOneWithWhereWithoutCheckInsInputObjectSchema } from './ActivitySessionUpdateToOneWithWhereWithoutCheckInsInput.schema';
import { ActivitySessionUpdateWithoutCheckInsInputObjectSchema as ActivitySessionUpdateWithoutCheckInsInputObjectSchema } from './ActivitySessionUpdateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedUpdateWithoutCheckInsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema).optional(),
  upsert: z.lazy(() => ActivitySessionUpsertWithoutCheckInsInputObjectSchema).optional(),
  connect: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ActivitySessionUpdateToOneWithWhereWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUpdateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedUpdateWithoutCheckInsInputObjectSchema)]).optional()
}).strict();
export const ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectSchema: z.ZodType<Prisma.ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInput>;
export const ActivitySessionUpdateOneRequiredWithoutCheckInsNestedInputObjectZodSchema = makeSchema();
