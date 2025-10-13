// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutTenantInputObjectSchema as EventCreateWithoutTenantInputObjectSchema } from './EventCreateWithoutTenantInput.schema';
import { EventUncheckedCreateWithoutTenantInputObjectSchema as EventUncheckedCreateWithoutTenantInputObjectSchema } from './EventUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutTenantInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutTenantInput>;
export const EventCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
