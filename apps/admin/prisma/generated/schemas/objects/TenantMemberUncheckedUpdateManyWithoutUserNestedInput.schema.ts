// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantMemberCreateWithoutUserInputObjectSchema as TenantMemberCreateWithoutUserInputObjectSchema } from './TenantMemberCreateWithoutUserInput.schema';
import { TenantMemberUncheckedCreateWithoutUserInputObjectSchema as TenantMemberUncheckedCreateWithoutUserInputObjectSchema } from './TenantMemberUncheckedCreateWithoutUserInput.schema';
import { TenantMemberCreateOrConnectWithoutUserInputObjectSchema as TenantMemberCreateOrConnectWithoutUserInputObjectSchema } from './TenantMemberCreateOrConnectWithoutUserInput.schema';
import { TenantMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema as TenantMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TenantMemberUpsertWithWhereUniqueWithoutUserInput.schema';
import { TenantMemberCreateManyUserInputEnvelopeObjectSchema as TenantMemberCreateManyUserInputEnvelopeObjectSchema } from './TenantMemberCreateManyUserInputEnvelope.schema';
import { TenantMemberWhereUniqueInputObjectSchema as TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema as TenantMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TenantMemberUpdateWithWhereUniqueWithoutUserInput.schema';
import { TenantMemberUpdateManyWithWhereWithoutUserInputObjectSchema as TenantMemberUpdateManyWithWhereWithoutUserInputObjectSchema } from './TenantMemberUpdateManyWithWhereWithoutUserInput.schema';
import { TenantMemberScalarWhereInputObjectSchema as TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantMemberCreateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TenantMemberUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantMemberCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TenantMemberCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TenantMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantMemberCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TenantMemberWhereUniqueInputObjectSchema), z.lazy(() => TenantMemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TenantMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TenantMemberUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TenantMemberUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TenantMemberScalarWhereInputObjectSchema), z.lazy(() => TenantMemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TenantMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TenantMemberUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantMemberUncheckedUpdateManyWithoutUserNestedInput>;
export const TenantMemberUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
