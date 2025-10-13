// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const ActivityTypeInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    activities: z.array(z.unknown())
}).strict();

export type ActivityTypeInputType = z.infer<typeof ActivityTypeInputSchema>;
