/*
  Warnings:

  - You are about to drop the column `serviceID` on the `Services` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RegiterService" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Aguardando aprovaçao';

-- AlterTable
ALTER TABLE "ServiceBudget" ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Realizar Orçamento';

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "serviceID";
