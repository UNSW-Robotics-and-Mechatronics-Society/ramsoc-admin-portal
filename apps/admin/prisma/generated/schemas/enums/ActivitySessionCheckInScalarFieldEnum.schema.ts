// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const ActivitySessionCheckInScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'activitySessionId', 'memberId', 'checkInTime'])

export type ActivitySessionCheckInScalarFieldEnum = z.infer<typeof ActivitySessionCheckInScalarFieldEnumSchema>;