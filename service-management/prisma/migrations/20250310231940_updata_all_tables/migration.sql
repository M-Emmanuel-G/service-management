/*
  Warnings:

  - You are about to drop the column `registerServiceID` on the `PrepareQuote` table. All the data in the column will be lost.
  - You are about to drop the column `registerServiceID` on the `Quote` table. All the data in the column will be lost.
  - Added the required column `clientID` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PrepareQuote" DROP CONSTRAINT "PrepareQuote_registerServiceID_fkey";

-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_registerServiceID_fkey";

-- DropIndex
DROP INDEX "Quote_registerServiceID_key";

-- AlterTable
ALTER TABLE "PrepareQuote" DROP COLUMN "registerServiceID";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "registerServiceID",
ADD COLUMN     "clientID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
