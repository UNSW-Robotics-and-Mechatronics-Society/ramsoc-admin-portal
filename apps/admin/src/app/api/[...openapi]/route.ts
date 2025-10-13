// TODO: split api in a separate app directory
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import type { NextRequest } from "next/server";
import { createOpenApiFetchHandler } from "trpc-to-openapi";

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  });
};

// This handler accepts GET/POST/etc. to your OpenAPI endpoints (e.g. /post/hello)
const handler = (req: NextRequest) =>
  createOpenApiFetchHandler({
    endpoint: "/api",
    router: appRouter,
    createContext: () => createContext(req),
    req,
  });

export {
  handler as DELETE,
  handler as GET,
  handler as HEAD,
  handler as OPTIONS,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
