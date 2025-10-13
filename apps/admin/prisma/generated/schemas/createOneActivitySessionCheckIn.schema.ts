// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionCheckInSelectObjectSchema as ActivitySessionCheckInSelectObjectSchema } from './objects/ActivitySessionCheckInSelect.schema';
import { ActivitySessionCheckInIncludeObjectSchema as ActivitySessionCheckInIncludeObjectSchema } from './objects/ActivitySessionCheckInInclude.schema';
import { ActivitySessionCheckInCreateInputObjectSchema as ActivitySessionCheckInCreateInputObjectSchema } from './objects/ActivitySessionCheckInCreateInput.schema';
import { ActivitySessionCheckInUncheckedCreateInputObjectSchema as ActivitySessionCheckInUncheckedCreateInputObjectSchema } from './objects/ActivitySessionCheckInUncheckedCreateInput.schema';

export const ActivitySessionCheckInCreateOneSchema: z.ZodType<Prisma.ActivitySessionCheckInCreateArgs> = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), data: z.union([ActivitySessionCheckInCreateInputObjectSchema, ActivitySessionCheckInUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCheckInCreateArgs>;

export const ActivitySessionCheckInCreateOneZodSchema = z.object({ select: ActivitySessionCheckInSelectObjectSchema.optional(), include: ActivitySessionCheckInIncludeObjectSchema.optional(), data: z.union([ActivitySessionCheckInCreateInputObjectSchema, ActivitySessionCheckInUncheckedCreateInputObjectSchema]) }).strict();