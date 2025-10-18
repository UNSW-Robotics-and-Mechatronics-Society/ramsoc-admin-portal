import { env } from "@/env";
import { initTRPC } from "@trpc/server";
import type { OpenApiMeta } from "trpc-to-openapi";

/**
 * Dev plugin for tRPC
 * @see https://trpc.io/docs/server/middlewares#concat
 */
export function createDevPlugin() {
  const t = initTRPC.context().meta<OpenApiMeta>().create();

  const isDev = env.NODE_ENV === "development";

  return {
    /**
     * Adds timing measurement and artificial delay (100-500ms) in development
     */
    timingProc: t.procedure.use(async ({ next, path }) => {
      const start = Date.now();

      if (isDev) {
        // artificial delay in dev
        const waitMs = Math.floor(Math.random() * 400) + 100;
        await new Promise((resolve) => setTimeout(resolve, waitMs));
      }

      const result = await next();

      const end = Date.now();
      console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

      return result;
    }),
  };
}
