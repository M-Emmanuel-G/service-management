-- CreateEnum
CREATE TYPE "EnumQuote" AS ENUM ('Enviado', 'Aguardando');

-- AlterTable
ALTER TABLE "RegisterService" ADD COLUMN     "sendQuote" "EnumQuote" NOT NULL DEFAULT 'Aguardando';

-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "itemOne" TEXT NOT NULL,
    "itemTwo" TEXT NOT NULL,
    "itemThree" TEXT NOT NULL,
    "itemFour" TEXT NOT NULL,
    "itemFive" TEXT NOT NULL,
    "itemSix" TEXT NOT NULL,
    "itemSeven" TEXT NOT NULL,
    "itemEight" TEXT NOT NULL,
    "itemNine" TEXT NOT NULL,
    "itemTen" TEXT NOT NULL,
    "registerServiceID" TEXT NOT NULL,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quote" ADD CONSTRAINT "Quote_registerServiceID_fkey" FOREIGN KEY ("registerServiceID") REFERENCES "RegisterService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
