// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema';
import { ActivityIncludeObjectSchema as ActivityIncludeObjectSchema } from './objects/ActivityInclude.schema';
import { ActivityCreateInputObjectSchema as ActivityCreateInputObjectSchema } from './objects/ActivityCreateInput.schema';
import { ActivityUncheckedCreateInputObjectSchema as ActivityUncheckedCreateInputObjectSchema } from './objects/ActivityUncheckedCreateInput.schema';

export const ActivityCreateOneSchema: z.ZodType<Prisma.ActivityCreateArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), data: z.union([ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActivityCreateArgs>;

export const ActivityCreateOneZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), data: z.union([ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema]) }).strict();