// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './objects/ActivitySessionSelect.schema';
import { ActivitySessionIncludeObjectSchema as ActivitySessionIncludeObjectSchema } from './objects/ActivitySessionInclude.schema';
import { ActivitySessionUpdateInputObjectSchema as ActivitySessionUpdateInputObjectSchema } from './objects/ActivitySessionUpdateInput.schema';
import { ActivitySessionUncheckedUpdateInputObjectSchema as ActivitySessionUncheckedUpdateInputObjectSchema } from './objects/ActivitySessionUncheckedUpdateInput.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './objects/ActivitySessionWhereUniqueInput.schema';

export const ActivitySessionUpdateOneSchema: z.ZodType<Prisma.ActivitySessionUpdateArgs> = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), data: z.union([ActivitySessionUpdateInputObjectSchema, ActivitySessionUncheckedUpdateInputObjectSchema]), where: ActivitySessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivitySessionUpdateArgs>;

export const ActivitySessionUpdateOneZodSchema = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), data: z.union([ActivitySessionUpdateInputObjectSchema, ActivitySessionUncheckedUpdateInputObjectSchema]), where: ActivitySessionWhereUniqueInputObjectSchema }).strict();