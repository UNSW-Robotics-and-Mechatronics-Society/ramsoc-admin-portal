// src/server/openapi.ts
import { env } from "@/env";
import { appRouter } from "@/server/api/root";
import { generateOpenApiDocument } from "trpc-to-openapi";

/**
 * Generates the OpenAPI specification for the RAMSoc API.
 * The spec can be served at `/api/openapi` or uploaded to API documentation tools.
 */
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "RAMSoc API",
  version: "1.0.0",
  description:
    "OpenAPI-compliant REST API for RAMSoc's platform, powered by tRPC and Next.js. To access protected endpoints, complete login at `/api/auth/signin` to obtain your session cookie.",
  baseUrl:
    env.NODE_ENV === "production"
      ? "https://admin.ramsocunsw.org/api"
      : "http://localhost:3000/api",
  // TODO: add docsUrl
  tags: ["test"],
});
