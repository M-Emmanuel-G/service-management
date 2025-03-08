/*
  Warnings:

  - You are about to alter the column `cnpj` on the `Clients` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.
  - You are about to alter the column `cpf` on the `Clients` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(11)`.
  - The `createdAt` column on the `Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `dateCreated` on the `Quote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `Clients` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Clients" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "cnpj" DROP NOT NULL,
ALTER COLUMN "cnpj" SET DATA TYPE VARCHAR(14),
ALTER COLUMN "cpf" DROP NOT NULL,
ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(11);

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "dateCreated",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Clients_cnpj_key" ON "Clients"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_cpf_key" ON "Clients"("cpf");
