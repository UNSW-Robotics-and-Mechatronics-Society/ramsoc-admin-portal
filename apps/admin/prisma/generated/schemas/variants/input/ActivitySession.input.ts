// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

import { VisibilitySchema } from '../../enums/Visibility.schema';
import { SessionCodeTypeSchema } from '../../enums/SessionCodeType.schema';
// prettier-ignore
export const ActivitySessionInputSchema = z.object({
    id: z.string(),
    tenantId: z.string(),
    activityId: z.string(),
    visibility: VisibilitySchema,
    startTime: z.date(),
    endTime: z.date(),
    location: z.string().optional().nullable(),
    capacity: z.number().int().optional().nullable(),
    codeType: SessionCodeTypeSchema,
    code: z.string().optional().nullable(),
    codeValidFrom: z.date().optional().nullable(),
    codeValidTo: z.date().optional().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    createdById: z.string(),
    updatedById: z.string().optional().nullable(),
    allowSelfCheckIn: z.boolean(),
    activity: z.unknown(),
    tenant: z.unknown(),
    createdBy: z.unknown(),
    updatedBy: z.unknown().optional().nullable(),
    checkIns: z.array(z.unknown())
}).strict();

export type ActivitySessionInputType = z.infer<typeof ActivitySessionInputSchema>;
