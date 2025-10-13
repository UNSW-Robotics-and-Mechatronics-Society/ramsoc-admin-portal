// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUserInputObjectSchema as TenantMemberCreateWithoutUserInputObjectSchema } from './TenantMemberCreateWithoutUserInput.schema';
import { TenantMemberUncheckedCreateWithoutUserInputObjectSchema as TenantMemberUncheckedCreateWithoutUserInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUserInput.schema';
import { TenantMemberCreateOrConnectWithoutUserInputObjectSchema as TenantMemberCreateOrConnectWithoutUserInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUserInput.schema';
import { TenantMemberCreateManyUserInputEnvelopeObjectSchema as TenantMemberCreateManyUserInputEnvelopeObjectSchema } from './TenantMemberCreateManyUserInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TenantMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TenantMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantMemberCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TenantMemberCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberCreateNestedManyWithoutUserInput>;
export const TenantMemberCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
