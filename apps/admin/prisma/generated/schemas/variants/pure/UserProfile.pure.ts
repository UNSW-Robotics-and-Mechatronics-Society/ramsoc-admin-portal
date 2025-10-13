// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const UserProfileModelSchema = z.object({
    userId: z.string(),
    firstName: z.string().nullable(),
    lastName: z.string().nullable(),
    preferredName: z.string().nullable(),
    image: z.string().nullable(),
    gender: z.string().nullable(),
    university: z.string().nullable(),
    studyLevel: z.string().nullable(),
    zID: z.string().nullable(),
    createDate: z.date(),
    updateDate: z.date(),
    user: z.unknown()
}).strict();

export type UserProfilePureType = z.infer<typeof UserProfileModelSchema>;
