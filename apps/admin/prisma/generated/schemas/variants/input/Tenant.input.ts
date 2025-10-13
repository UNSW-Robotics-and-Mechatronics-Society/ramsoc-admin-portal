// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const TenantInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string().optional().nullable(),
    siteUrl: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    tenantMembers: z.array(z.unknown()),
    events: z.array(z.unknown()),
    activities: z.array(z.unknown()),
    activitySessions: z.array(z.unknown()),
    activitySessionCheckIns: z.array(z.unknown())
}).strict();

export type TenantInputType = z.infer<typeof TenantInputSchema>;
