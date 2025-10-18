/**
 * RLS (Row Level Security) context management functions for setting and resetting
 * the current user context in the database.
 */

import { db } from "@/server/db";

/**
 * Set the current user context for RLS
 */
export async function setRLSContext(userId: string | null) {
  try {
    if (userId) {
      const sanitizedUserId = userId.replace(/'/g, "''");
      await db.$executeRawUnsafe(
        `SET app.current_user_id = '${sanitizedUserId}'`
      );
    } else {
      // Clear the context
      await db.$executeRawUnsafe(`SET app.current_user_id = ''`);
    }
  } catch (error) {
    // If RLS is not set up, just continue without setting context
    console.warn(
      "RLS context setting failed (this is expected if RLS is not yet configured):",
      error
    );
  }
}

/**
 * Reset RLS context (useful for system operations)
 *
 * !! CAUTION !! Resetting RLS context can lead to security vulnerabilities if misused.
 * @example
 * ```typescript
 * await resetRLSContext();
 * // Perform operations without user context
 * ```
 * TODO: test this
 */
export async function resetRLSContext() {
  await db.$executeRawUnsafe(`RESET app.current_user_id`);
}

/**
 * Execute a function with system privileges (bypasses RLS)
 *
 * !! CAUTION !! This should only be used for system operations that
 * require elevated privileges. Misuse can lead to security vulnerabilities.
 * @example
 * ```typescript
 * await withSystemPrivileges(async () => {
 *   // Perform operations that require system privileges here
 * });
 * ```
 * TODO: test this
 */
export async function withSystemPrivileges<T>(
  fn: () => Promise<T>
): Promise<T> {
  const currentUserId = await db.$queryRaw<[{ current_setting: string }]>`
    SELECT current_setting('app.current_user_id', true) as current_setting
  `;

  try {
    await resetRLSContext();
    return await fn();
  } finally {
    // Restore previous context
    if (
      currentUserId[0]?.current_setting &&
      currentUserId[0].current_setting !== ""
    ) {
      await setRLSContext(currentUserId[0].current_setting);
    }
  }
}
