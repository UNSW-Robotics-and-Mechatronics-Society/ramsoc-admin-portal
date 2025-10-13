// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

export const ActivitySessionScalarFieldEnumSchema = z.enum(['id', 'tenantId', 'activityId', 'visibility', 'startTime', 'endTime', 'location', 'capacity', 'codeType', 'code', 'codeValidFrom', 'codeValidTo', 'createDate', 'updateDate', 'createdById', 'updatedById', 'allowSelfCheckIn'])

export type ActivitySessionScalarFieldEnum = z.infer<typeof ActivitySessionScalarFieldEnumSchema>;