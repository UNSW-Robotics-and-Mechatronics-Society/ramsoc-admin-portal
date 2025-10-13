// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './objects/ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInIncludeObjectSchema as ActivitySessionCheckInIncludeObjectSchema } from './objects/ActivitySessionCheckInInclude.schema';
import { ActivitySessionCheckInWhereUniqueInputObjectSchema as ActivitySessionCheckInWhereUniqueInputObjectSchema } from './objects/ActivitySessionCheckInWhereUniqueInput.schema';

export const ActivitySessionCheckInDeleteOneSchema: z.ZodType<Prisma.ActivitySessionCheckInDeleteArgs> = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), where: ActivitySessionCheckInWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInDeleteArgs>;

export const ActivitySessionCheckInDeleteOneZodSchema = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), where: ActivitySessionCheckInWhereUniqueInputObjectSchema }).strict();