// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const TenantModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    logo: z.string().nullable(),
    siteUrl: z.string().nullable(),
    description: z.string().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    tenantMembers: z.array(z.unknown()),
    events: z.array(z.unknown()),
    activities: z.array(z.unknown()),
    activitySessions: z.array(z.unknown()),
    activitySessionCheckIns: z.array(z.unknown())
}).strict();

export type TenantPureType = z.infer<typeof TenantModelSchema>;
