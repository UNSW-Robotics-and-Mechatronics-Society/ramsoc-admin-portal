// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './objects/ActivityTypeInclude.schema';
import { ActivityTypeUpdateInputObjectSchema as ActivityTypeUpdateInputObjectSchema } from './objects/ActivityTypeUpdateInput.schema';
import { ActivityTypeUncheckedUpdateInputObjectSchema as ActivityTypeUncheckedUpdateInputObjectSchema } from './objects/ActivityTypeUncheckedUpdateInput.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';

export const ActivityTypeUpdateOneSchema: z.ZodType<Prisma.ActivityTypeUpdateArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), data: z.union([ActivityTypeUpdateInputObjectSchema, ActivityTypeUncheckedUpdateInputObjectSchema]), where: ActivityTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityTypeUpdateArgs>;

export const ActivityTypeUpdateOneZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), data: z.union([ActivityTypeUpdateInputObjectSchema, ActivityTypeUncheckedUpdateInputObjectSchema]), where: ActivityTypeWhereUniqueInputObjectSchema }).strict();