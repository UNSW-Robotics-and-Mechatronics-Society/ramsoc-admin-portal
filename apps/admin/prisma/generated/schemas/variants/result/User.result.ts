// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown()),
    posts: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
