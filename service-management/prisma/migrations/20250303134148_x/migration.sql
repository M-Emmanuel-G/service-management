-- AlterTable
ALTER TABLE "Quote" ALTER COLUMN "quantity" SET DEFAULT 1;

-- CreateTable
CREATE TABLE "PrepareQuote" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productID" TEXT NOT NULL,
    "quoteID" TEXT NOT NULL,

    CONSTRAINT "PrepareQuote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PrepareQuote" ADD CONSTRAINT "PrepareQuote_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrepareQuote" ADD CONSTRAINT "PrepareQuote_quoteID_fkey" FOREIGN KEY ("quoteID") REFERENCES "Quote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
