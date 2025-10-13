// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventCreateWithoutTenantInputObjectSchema as EventCreateWithoutTenantInputObjectSchema } from './EventCreateWithoutTenantInput.schema';
import { EventUncheckedCreateWithoutTenantInputObjectSchema as EventUncheckedCreateWithoutTenantInputObjectSchema } from './EventUncheckedCreateWithoutTenantInput.schema';
import { EventCreateOrConnectWithoutTenantInputObjectSchema as EventCreateOrConnectWithoutTenantInputObjectSchema } from './EventCreateOrConnectWithoutTenantInput.schema';
import { EventCreateManyTenantInputEnvelopeObjectSchema as EventCreateManyTenantInputEnvelopeObjectSchema } from './EventCreateManyTenantInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutTenantInputObjectSchema), z.lazy(() => EventCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutTenantInput>;
export const EventUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
