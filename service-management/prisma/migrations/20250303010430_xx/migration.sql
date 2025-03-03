/*
  Warnings:

  - A unique constraint covering the columns `[productID]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Quote_productID_key" ON "Quote"("productID");
