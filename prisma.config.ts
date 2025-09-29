import "dotenv/config";
import path from "node:path";
import type { PrismaConfig } from "prisma";

export default {
  experimental: {
    studio: true,
  },
  schema: path.join("prisma", "schema"),
  migrations: {
    path: path.join("db", "migrations"),
  },
  views: {
    path: path.join("db", "views"),
  },
  typedSql: {
    path: path.join("db", "queries"),
  },
} satisfies PrismaConfig;
