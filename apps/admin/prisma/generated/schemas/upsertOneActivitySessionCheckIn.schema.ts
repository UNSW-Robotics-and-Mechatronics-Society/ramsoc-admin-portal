// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './objects/ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInIncludeObjectSchema as ActivitySessionCheckInIncludeObjectSchema } from './objects/ActivitySessionCheckInInclude.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './objects/ActivitySessionCheckInWhereUniqueInput.schema';
import { ActivitySessionCheckInCreateInputObjectSchema as ActivitySessionCheckInCreateInputObjectSchema } from './objects/ActivitySessionCheckInCreateInput.schema';
import { ActivitySessionCheckInUncheckedCreateInputObjectSchema as ActivitySessionCheckInUncheckedCreateInputObjectSchema } from './objects/ActivitySessionCheckInUncheckedCreateInput.schema';
import { ActivitySessionCheckInUpdateInputObjectSchema as ActivitySessionCheckInUpdateInputObjectSchema } from './objects/ActivitySessionCheckInUpdateInput.schema';
import { ActivitySessionCheckInUncheckedUpdateInputObjectSchema as ActivitySessionCheckInUncheckedUpdateInputObjectSchema } from './objects/ActivitySessionCheckInUncheckedUpdateInput.schema';

export const ActivitySessionCheckInUpsertOneSchema: z.ZodType<Prisma.ActivitySessionCheckInUpsertArgs> = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), where: ActivitySessionCheckInWhereUniqueInputObjectSchema, create: z.union([ ActivitySessionCheckInCreateInputObjectSchema, ActivitySessionCheckInUncheckedCreateInputObjectSchema ]), update: z.union([ ActivitySessionCheckInUpdateInputObjectSchema, ActivitySessionCheckInUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpsertArgs>;

export const ActivitySessionCheckInUpsertOneZodSchema = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), where: ActivitySessionCheckInWhereUniqueInputObjectSchema, create: z.union([ ActivitySessionCheckInCreateInputObjectSchema, ActivitySessionCheckInUncheckedCreateInputObjectSchema ]), update: z.union([ ActivitySessionCheckInUpdateInputObjectSchema, ActivitySessionCheckInUncheckedUpdateInputObjectSchema ]) }).strict();