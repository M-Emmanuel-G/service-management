/*
  Warnings:

  - You are about to drop the column `quantity` on the `Quote` table. All the data in the column will be lost.
  - Added the required column `subTotal` to the `PrepareQuote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PrepareQuote" DROP CONSTRAINT "PrepareQuote_productID_fkey";

-- DropForeignKey
ALTER TABLE "PrepareQuote" DROP CONSTRAINT "PrepareQuote_quoteID_fkey";

-- DropForeignKey
ALTER TABLE "PrepareQuote" DROP CONSTRAINT "PrepareQuote_registerServiceID_fkey";

-- AlterTable
ALTER TABLE "PrepareQuote" ADD COLUMN     "subTotal" DECIMAL(10,2) NOT NULL;

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "quantity";

-- AddForeignKey
ALTER TABLE "PrepareQuote" ADD CONSTRAINT "PrepareQuote_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrepareQuote" ADD CONSTRAINT "PrepareQuote_quoteID_fkey" FOREIGN KEY ("quoteID") REFERENCES "Quote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrepareQuote" ADD CONSTRAINT "PrepareQuote_registerServiceID_fkey" FOREIGN KEY ("registerServiceID") REFERENCES "RegisterService"("id") ON DELETE CASCADE ON UPDATE CASCADE;
