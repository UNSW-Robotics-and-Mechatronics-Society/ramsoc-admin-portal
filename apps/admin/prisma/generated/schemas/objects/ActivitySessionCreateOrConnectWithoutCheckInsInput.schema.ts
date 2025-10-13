// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCreateWithoutCheckInsInputObjectSchema as ActivitySessionCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionCreateWithoutCheckInsInput.schema';
import { ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema as ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutCheckInsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutCheckInsInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutCheckInsInputObjectSchema)])
}).strict();
export const ActivitySessionCreateOrConnectWithoutCheckInsInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutCheckInsInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutCheckInsInput>;
export const ActivitySessionCreateOrConnectWithoutCheckInsInputObjectZodSchema = makeSchema();
