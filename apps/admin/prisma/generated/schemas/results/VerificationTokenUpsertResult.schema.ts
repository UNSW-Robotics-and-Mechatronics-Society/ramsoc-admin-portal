// @ts-nocheck
/* eslint-disable */

import * as z from 'zod';
export const VerificationTokenUpsertResultSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.date()
});