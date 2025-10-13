// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const UserProfileInputSchema = z.object({
    userId: z.string(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    preferredName: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    gender: z.string().optional().nullable(),
    university: z.string().optional().nullable(),
    studyLevel: z.string().optional().nullable(),
    zID: z.string().optional().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    user: z.unknown()
}).strict();

export type UserProfileInputType = z.infer<typeof UserProfileInputSchema>;
