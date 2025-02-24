/*
  Warnings:

  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RegiterService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceBudget` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ServiceBudget" DROP CONSTRAINT "ServiceBudget_clientID_fkey";

-- DropForeignKey
ALTER TABLE "ServiceBudget" DROP CONSTRAINT "ServiceBudget_serviceID_fkey";

-- DropTable
DROP TABLE "Clients";

-- DropTable
DROP TABLE "RegiterService";

-- DropTable
DROP TABLE "ServiceBudget";

-- DropTable
DROP TABLE "Services";
