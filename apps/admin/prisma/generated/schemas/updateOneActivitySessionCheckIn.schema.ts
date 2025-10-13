// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './objects/ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInIncludeObjectSchema as ActivitySessionCheckInIncludeObjectSchema } from './objects/ActivitySessionCheckInInclude.schema';
import { ActivitySessionCheckInUpdateInputObjectSchema as ActivitySessionCheckInUpdateInputObjectSchema } from './objects/ActivitySessionCheckInUpdateInput.schema';
import { ActivitySessionCheckInUncheckedUpdateInputObjectSchema as ActivitySessionCheckInUncheckedUpdateInputObjectSchema } from './objects/ActivitySessionCheckInUncheckedUpdateInput.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './objects/ActivitySessionCheckInWhereUniqueInput.schema';

export const ActivitySessionCheckInUpdateOneSchema: z.ZodType<Prisma.ActivitySessionCheckInUpdateArgs> = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), data: z.union([ActivitySessionCheckInUpdateInputObjectSchema, ActivitySessionCheckInUncheckedUpdateInputObjectSchema]), where: ActivitySessionCheckInWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInUpdateArgs>;

export const ActivitySessionCheckInUpdateOneZodSchema = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), data: z.union([ActivitySessionCheckInUpdateInputObjectSchema, ActivitySessionCheckInUncheckedUpdateInputObjectSchema]), where: ActivitySessionCheckInWhereUniqueInputObjectSchema }).strict();