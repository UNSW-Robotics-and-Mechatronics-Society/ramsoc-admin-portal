// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './objects/ActivityTypeInclude.schema';
import { ActivityTypeCreateInputObjectSchema as ActivityTypeCreateInputObjectSchema } from './objects/ActivityTypeCreateInput.schema';
import { ActivityTypeUncheckedCreateInputObjectSchema as ActivityTypeUncheckedCreateInputObjectSchema } from './objects/ActivityTypeUncheckedCreateInput.schema';

export const ActivityTypeCreateOneSchema: z.ZodType<Prisma.ActivityTypeCreateArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), data: z.union([ActivityTypeCreateInputObjectSchema, ActivityTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActivityTypeCreateArgs>;

export const ActivityTypeCreateOneZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), data: z.union([ActivityTypeCreateInputObjectSchema, ActivityTypeUncheckedCreateInputObjectSchema]) }).strict();