/*
  Warnings:

  - Added the required column `registerServiceID` to the `PrepareQuote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_productID_fkey";

-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_registerServiceID_fkey";

-- DropIndex
DROP INDEX "Quote_productID_key";

-- AlterTable
ALTER TABLE "PrepareQuote" ADD COLUMN     "registerServiceID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Quote" ALTER COLUMN "registerServiceID" DROP DEFAULT,
ALTER COLUMN "productID" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_registerServiceID_fkey" FOREIGN KEY ("registerServiceID") REFERENCES "RegisterService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrepareQuote" ADD CONSTRAINT "PrepareQuote_registerServiceID_fkey" FOREIGN KEY ("registerServiceID") REFERENCES "RegisterService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
