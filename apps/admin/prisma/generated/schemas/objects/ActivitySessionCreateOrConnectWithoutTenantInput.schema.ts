// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCreateWithoutTenantInputObjectSchema as ActivitySessionCreateWithoutTenantInputObjectSchema } from './ActivitySessionCreateWithoutTenantInput.schema';
import { ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCreateOrConnectWithoutTenantInput>;
export const ActivitySessionCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
