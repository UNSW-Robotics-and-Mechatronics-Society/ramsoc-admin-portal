// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';

// prettier-ignore
export const ActivityTypeModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    activities: z.array(z.unknown())
}).strict();

export type ActivityTypePureType = z.infer<typeof ActivityTypeModelSchema>;
