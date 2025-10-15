// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

import { VisibilitySchema } from '../../enums/Visibility.schema';
// prettier-ignore
export const ActivityInputSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    eventId: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    slug: z.string(),
    coverImageUrl: z.string().optional().nullable(),
    visibility: VisibilitySchema,
    createDate: z.date(),
    updateDate: z.date(),
    createdById: z.string(),
    updatedById: z.string().optional().nullable(),
    tenant: z.unknown(),
    event: z.unknown(),
    createdBy: z.unknown(),
    updatedBy: z.unknown().optional().nullable(),
    types: z.array(z.unknown()),
    activitySessions: z.array(z.unknown())
}).strict();

export type ActivityInputType = z.infer<typeof ActivityInputSchema>;
