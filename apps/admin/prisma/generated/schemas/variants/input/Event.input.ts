// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

import { VisibilitySchema } from '../../enums/Visibility.schema';
// prettier-ignore
export const EventInputSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    title: z.string(),
    slug: z.string(),
    coverImageUrl: z.string().optional().nullable(),
    siteUrl: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    visibility: VisibilitySchema,
    createdById: z.string(),
    updatedById: z.string().optional().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    tenant: z.unknown(),
    createdBy: z.unknown(),
    updatedBy: z.unknown().optional().nullable(),
    activities: z.array(z.unknown())
}).strict();

export type EventInputType = z.infer<typeof EventInputSchema>;
