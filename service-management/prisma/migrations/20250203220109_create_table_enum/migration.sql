/*
  Warnings:

  - The `status` column on the `RegisterService` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `ServiceBudget` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Orcamento', 'Aguardando', 'Aprovado', 'Finalizado');

-- DropForeignKey
ALTER TABLE "ServiceBudget" DROP CONSTRAINT "ServiceBudget_clientID_fkey";

-- DropForeignKey
ALTER TABLE "ServiceBudget" DROP CONSTRAINT "ServiceBudget_serviceID_fkey";

-- AlterTable
ALTER TABLE "RegisterService" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Aguardando';

-- DropTable
DROP TABLE "ServiceBudget";
