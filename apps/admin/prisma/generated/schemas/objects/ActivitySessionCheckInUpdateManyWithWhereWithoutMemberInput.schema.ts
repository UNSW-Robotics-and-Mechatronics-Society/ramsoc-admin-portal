// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivitySessionCheckInScalarWhereInputObjectSchema as ActivitySessionCheckInScalarWhereInputObjectSchema } from './ActivitySessionCheckInScalarWhereInput.schema';
import { ActivitySessionCheckInUpdateManyMutationInputObjectSchema as ActivitySessionCheckInUpdateManyMutationInputObjectSchema } from './ActivitySessionCheckInUpdateManyMutationInput.schema';
import { ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInputObjectSchema as ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInputObjectSchema } from './ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActivitySessionCheckInScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ActivitySessionCheckInUpdateManyMutationInputObjectSchema), z.lazy(() => ActivitySessionCheckInUncheckedUpdateManyWithoutMemberInputObjectSchema)])
}).strict();
export const ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInputObjectSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInput>;
export const ActivitySessionCheckInUpdateManyWithWhereWithoutMemberInputObjectZodSchema = makeSchema();
