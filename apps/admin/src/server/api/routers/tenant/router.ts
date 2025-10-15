import { createTRPCRouter } from "@/server/api/trpc";
import {
  createTenantProcedure,
  deleteTenantProcedure,
  getTenantProcedure,
  listTenantProcedure,
  updateTenantProcedure,
} from "./procedures";

export const tenantRouter = createTRPCRouter({
  list: listTenantProcedure,

  get: getTenantProcedure,

  create: createTenantProcedure,

  update: updateTenantProcedure,

  delete: deleteTenantProcedure,
});
