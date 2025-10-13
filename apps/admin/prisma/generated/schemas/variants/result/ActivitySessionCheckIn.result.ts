// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const ActivitySessionCheckInResultSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    activitySessionId: z.string(),
    memberId: z.string(),
    checkInTime: z.date(),
    tenant: z.unknown(),
    activitySession: z.unknown(),
    member: z.unknown()
}).strict();

export type ActivitySessionCheckInResultType = z.infer<typeof ActivitySessionCheckInResultSchema>;
