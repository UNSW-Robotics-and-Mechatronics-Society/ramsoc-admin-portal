// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

import { VisibilitySchema } from '../../enums/Visibility.schema';
// prettier-ignore
export const EventResultSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    title: z.string(),
    slug: z.string(),
    coverImageUrl: z.string().nullable(),
    siteUrl: z.string().nullable(),
    description: z.string().nullable(),
    visibility: VisibilitySchema,
    createdById: z.string(),
    updatedById: z.string().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    tenant: z.unknown(),
    createdBy: z.unknown(),
    updatedBy: z.unknown().nullable(),
    activities: z.array(z.unknown())
}).strict();

export type EventResultType = z.infer<typeof EventResultSchema>;
