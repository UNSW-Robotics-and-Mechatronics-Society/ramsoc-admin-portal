// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutTenantInputObjectSchema as ActivityCreateWithoutTenantInputObjectSchema } from './ActivityCreateWithoutTenantInput.schema';
import { ActivityUncheckedCreateWithoutTenantInputObjectSchema as ActivityUncheckedCreateWithoutTenantInputObjectSchema } from './ActivityUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ActivityCreateWithoutTenantInputObjectSchema), z.lazy(() => ActivityUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const ActivityCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivityCreateOrConnectWithoutTenantInput>;
export const ActivityCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
