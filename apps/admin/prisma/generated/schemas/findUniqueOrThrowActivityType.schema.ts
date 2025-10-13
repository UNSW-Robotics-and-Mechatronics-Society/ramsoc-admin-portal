// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityTypeSelectObjectSchema as ActivityTypeSelectObjectSchema } from './objects/ActivityTypeSelect.schema';
import { ActivityTypeIncludeObjectSchema as ActivityTypeIncludeObjectSchema } from './objects/ActivityTypeInclude.schema';
import { ActivityTypeWhereUniqueInputObjectSchema as ActivityTypeWhereUniqueInputObjectSchema } from './objects/ActivityTypeWhereUniqueInput.schema';

export const ActivityTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.ActivityTypeFindUniqueOrThrowArgs> = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), where: ActivityTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityTypeFindUniqueOrThrowArgs>;

export const ActivityTypeFindUniqueOrThrowZodSchema = z.object({ select: ActivityTypeSelectObjectSchema.optional(), include: ActivityTypeIncludeObjectSchema.optional(), where: ActivityTypeWhereUniqueInputObjectSchema }).strict();