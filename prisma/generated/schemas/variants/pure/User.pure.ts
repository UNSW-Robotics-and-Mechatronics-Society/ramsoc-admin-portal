// @ts-nocheck
/* eslint-disable */

import { z } from 'zod';

// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    posts: z.array(z.unknown())
}).strict();

export type UserModelType = z.infer<typeof UserModelSchema>;
