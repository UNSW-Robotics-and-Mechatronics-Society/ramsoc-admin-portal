// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCreateWithoutCheckInsInputObjectSchema as ActivitySessionCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCheckInsInput.schema';
import { ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema as ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateOrConnectWithoutCheckInsInput.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema).optional(),
  connect: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ActivitySessionCreateNestedOneWithoutCheckInsInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateNestedOneWithoutCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateNestedOneWithoutCheckInsInput>;
export const ActivitySessionCreateNestedOneWithoutCheckInsInputObjectZodSchema = makeSchema();
