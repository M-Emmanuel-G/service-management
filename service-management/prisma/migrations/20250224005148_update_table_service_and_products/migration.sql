/*
  Warnings:

  - You are about to drop the column `itemEight` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemFive` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemFour` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemNine` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemOne` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemSeven` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemSix` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemTen` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemThree` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `itemTwo` on the `Quote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "itemEight",
DROP COLUMN "itemFive",
DROP COLUMN "itemFour",
DROP COLUMN "itemNine",
DROP COLUMN "itemOne",
DROP COLUMN "itemSeven",
DROP COLUMN "itemSix",
DROP COLUMN "itemTen",
DROP COLUMN "itemThree",
DROP COLUMN "itemTwo",
ADD COLUMN     "dateCreated" TEXT NOT NULL DEFAULT '00/00/0000',
ADD COLUMN     "productID" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "registerServiceID" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "value" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "createdAt" TEXT NOT NULL DEFAULT '00/00/0000',

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
