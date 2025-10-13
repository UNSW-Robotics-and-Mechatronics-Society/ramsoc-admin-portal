// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './objects/ActivityTypeInclude.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';

export const ActivityTypeDeleteOneSchema: z.ZodType<Prisma.ActivityTypeDeleteArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), where: ActivityTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityTypeDeleteArgs>;

export const ActivityTypeDeleteOneZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), where: ActivityTypeWhereUniqueInputObjectSchema }).strict();