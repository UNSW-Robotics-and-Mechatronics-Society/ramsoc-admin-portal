// @ts-nocheck
/* eslint-disable */

import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ActivityUpdateManyMutationInputObjectSchema as ActivityUpdateManyMutationInputObjectSchema } from './objects/ActivityUpdateManyMutationInput.schema';
import { ActivityWhereInputObjectSchema as ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';

export const ActivityUpdateManySchema: z.ZodType<Prisma.ActivityUpdateManyArgs> = z.object({ data: ActivityUpdateManyMutationInputObjectSchema, where: ActivityWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ActivityUpdateManyArgs>;

export const ActivityUpdateManyZodSchema = z.object({ data: ActivityUpdateManyMutationInputObjectSchema, where: ActivityWhereInputObjectSchema.optional() }).strict();