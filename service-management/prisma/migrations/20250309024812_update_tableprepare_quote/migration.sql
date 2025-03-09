/*
  Warnings:

  - A unique constraint covering the columns `[registerServiceID]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Quote_registerServiceID_key" ON "Quote"("registerServiceID");
