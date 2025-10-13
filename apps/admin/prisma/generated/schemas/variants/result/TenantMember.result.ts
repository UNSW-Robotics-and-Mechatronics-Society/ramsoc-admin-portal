// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

import { TenantMemberTypeSchema } from '../../enums/TenantMemberType.schema';
// prettier-ignore
export const TenantMemberResultSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    userId: z.string(),
    type: TenantMemberTypeSchema,
    isActive: z.boolean(),
    createDate: z.date(),
    updateDate: z.date(),
    tenant: z.unknown(),
    user: z.unknown(),
    createdEvents: z.array(z.unknown()),
    updatedEvents: z.array(z.unknown()),
    createdActivities: z.array(z.unknown()),
    updatedActivities: z.array(z.unknown()),
    createdActivitySessions: z.array(z.unknown()),
    updatedActivitySessions: z.array(z.unknown()),
    ActivitySessionCheckIn: z.array(z.unknown())
}).strict();

export type TenantMemberResultType = z.infer<typeof TenantMemberResultSchema>;
