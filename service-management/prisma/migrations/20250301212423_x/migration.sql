/*
  Warnings:

  - You are about to alter the column `value` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `value` on the `Services` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Products" ALTER COLUMN "value" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "Services" ALTER COLUMN "value" DROP DEFAULT,
ALTER COLUMN "value" SET DATA TYPE DECIMAL(10,2);
