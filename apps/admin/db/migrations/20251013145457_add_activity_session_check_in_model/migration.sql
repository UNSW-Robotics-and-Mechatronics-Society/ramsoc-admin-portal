-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."ActivitySession" DROP CONSTRAINT "ActivitySession_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."ActivitySession" DROP CONSTRAINT "ActivitySession_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_updatedById_fkey";

-- DropIndex
DROP INDEX "public"."ActivitySession_activityId_idx";

-- AlterTable
ALTER TABLE "ActivitySession" ADD COLUMN     "allowSelfCheckIn" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ActivitySessionCheckIn" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "activitySessionId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "checkInTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivitySessionCheckIn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActivitySessionCheckIn_tenantId_activitySessionId_memberId_key" ON "ActivitySessionCheckIn"("tenantId", "activitySessionId", "memberId");

-- CreateIndex
CREATE UNIQUE INDEX "ActivitySessionCheckIn_tenantId_activitySessionId_checkInTi_key" ON "ActivitySessionCheckIn"("tenantId", "activitySessionId", "checkInTime");

-- CreateIndex
CREATE INDEX "ActivitySession_tenantId_activityId_idx" ON "ActivitySession"("tenantId", "activityId");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySession" ADD CONSTRAINT "ActivitySession_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySession" ADD CONSTRAINT "ActivitySession_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySessionCheckIn" ADD CONSTRAINT "ActivitySessionCheckIn_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySessionCheckIn" ADD CONSTRAINT "ActivitySessionCheckIn_activitySessionId_fkey" FOREIGN KEY ("activitySessionId") REFERENCES "ActivitySession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivitySessionCheckIn" ADD CONSTRAINT "ActivitySessionCheckIn_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "TenantMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;
