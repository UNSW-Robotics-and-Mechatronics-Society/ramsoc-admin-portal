// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './objects/ActivitySessionSelect.schema';
import { ActivitySessionIncludeObjectSchema as ActivitySessionIncludeObjectSchema } from './objects/ActivitySessionInclude.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './objects/ActivitySessionWhereUniqueInput.schema';
import { ActivitySessionCreateInputObjectSchema as ActivitySessionCreateInputObjectSchema } from './objects/ActivitySessionCreateInput.schema';
import { ActivitySessionUncheckedCreateInputObjectSchema as ActivitySessionUncheckedCreateInputObjectSchema } from './objects/ActivitySessionUncheckedCreateInput.schema';
import { ActivitySessionUpdateInputObjectSchema as ActivitySessionUpdateInputObjectSchema } from './objects/ActivitySessionUpdateInput.schema';
import { ActivitySessionUncheckedUpdateInputObjectSchema as ActivitySessionUncheckedUpdateInputObjectSchema } from './objects/ActivitySessionUncheckedUpdateInput.schema';

export const ActivitySessionUpsertOneSchema: z.ZodType<Prisma.ActivitySessionUpsertArgs> = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), where: ActivitySessionWhereUniqueInputObjectSchema, create: z.union([ ActivitySessionCreateInputObjectSchema, ActivitySessionUncheckedCreateInputObjectSchema ]), update: z.union([ ActivitySessionUpdateInputObjectSchema, ActivitySessionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActivitySessionUpsertArgs>;

export const ActivitySessionUpsertOneZodSchema = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), where: ActivitySessionWhereUniqueInputObjectSchema, create: z.union([ ActivitySessionCreateInputObjectSchema, ActivitySessionUncheckedCreateInputObjectSchema ]), update: z.union([ ActivitySessionUpdateInputObjectSchema, ActivitySessionUncheckedUpdateInputObjectSchema ]) }).strict();