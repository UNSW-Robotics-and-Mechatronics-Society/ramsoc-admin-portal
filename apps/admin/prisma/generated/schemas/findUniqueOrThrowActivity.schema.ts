// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivitySelectObjectSchema as ActivitySelectObjectSchema } from './objects/ActivitySelect.schema';
import { ActivityIncludeObjectSchema as ActivityIncludeObjectSchema } from './objects/ActivityInclude.schema';
import { ActivityWhereUniqueInputObjectSchema as ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';

export const ActivityFindUniqueOrThrowSchema: z.ZodType<Prisma.ActivityFindUniqueOrThrowArgs> = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), where: ActivityWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ActivityFindUniqueOrThrowArgs>;

export const ActivityFindUniqueOrThrowZodSchema = z.object({ select: ActivitySelectObjectSchema.optional(), include: ActivityIncludeObjectSchema.optional(), where: ActivityWhereUniqueInputObjectSchema }).strict();