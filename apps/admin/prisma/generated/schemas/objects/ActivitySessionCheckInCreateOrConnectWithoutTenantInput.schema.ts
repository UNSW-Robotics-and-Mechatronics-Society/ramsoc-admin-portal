// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInCreateWithoutTenantInput.schema';
import { ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema as ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema } from './ActivitySessionCheckInUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivitySessionCheckInCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateOrConnectWithoutTenantInput>;
export const ActivitySessionCheckInCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
