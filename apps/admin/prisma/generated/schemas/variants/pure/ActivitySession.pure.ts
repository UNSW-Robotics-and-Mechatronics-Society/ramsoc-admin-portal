// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

import { VisibilitySchema } from '../../enums/Visibility.schema';
import { SessionCodeTypeSchema } from '../../enums/SessionCodeType.schema';
// prettier-ignore
export const ActivitySessionModelSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    activityId: z.string(),
    visibility: VisibilitySchema,
    startTime: z.date(),
    endTime: z.date(),
    location: z.string().nullable(),
    capacity: z.number().int().nullable(),
    codeType: SessionCodeTypeSchema,
    code: z.string().nullable(),
    codeValidFrom: z.date().nullable(),
    codeValidTo: z.date().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    createdById: z.string(),
    updatedById: z.string().nullable(),
    allowSelfCheckIn: z.boolean(),
    activity: z.unknown(),
    tenant: z.unknown(),
    createdBy: z.unknown(),
    updatedBy: z.unknown().nullable(),
    checkIns: z.array(z.unknown())
}).strict();

export type ActivitySessionPureType = z.infer<typeof ActivitySessionModelSchema>;
