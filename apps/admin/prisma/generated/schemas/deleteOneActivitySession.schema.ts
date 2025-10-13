// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySessionSelectObjectSchema as ActivitySessionSelectObjectSchema } from './objects/ActivitySessionSelect.schema';
import { ActivitySessionIncludeObjectSchema as ActivitySessionIncludeObjectSchema } from './objects/ActivitySessionInclude.schema';
import { ActivitySessionWhereUniqueInputObjectSchema as ActivitySessionWhereUniqueInputObjectSchema } from './objects/ActivitySessionWhereUniqueInput.schema';

export const ActivitySessionDeleteOneSchema: z.ZodType<Prisma.ActivitySessionDeleteArgs> = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), where: ActivitySessionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivitySessionDeleteArgs>;

export const ActivitySessionDeleteOneZodSchema = z.object({ select: ActivitySessionSelectObjectSchema.optional(), include: ActivitySessionIncludeObjectSchema.optional(), where: ActivitySessionWhereUniqueInputObjectSchema }).strict();