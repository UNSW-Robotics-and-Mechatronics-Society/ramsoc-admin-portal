// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './objects/ActivitySessionSelect.schema';
import { ActivitySessionIncludeObjectSchema as ActivitySessionIncludeObjectSchema } from './objects/ActivitySessionInclude.schema';
import { ActivitySessionCreateInputObjectSchema as ActivitySessionCreateInputObjectSchema } from './objects/ActivitySessionCreateInput.schema';
import { ActivitySessionUncheckedCreateInputObjectSchema as ActivitySessionUncheckedCreateInputObjectSchema } from './objects/ActivitySessionUncheckedCreateInput.schema';

export const ActivitySessionCreateOneSchema: z.ZodType<Prisma.ActivitySessionCreateArgs> = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), data: z.union([ActivitySessionCreateInputObjectSchema, ActivitySessionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ActivitySessionCreateArgs>;

export const ActivitySessionCreateOneZodSchema = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), data: z.union([ActivitySessionCreateInputObjectSchema, ActivitySessionUncheckedCreateInputObjectSchema]) }).strict();