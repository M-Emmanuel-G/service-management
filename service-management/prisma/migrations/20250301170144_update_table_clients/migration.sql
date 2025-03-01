-- CreateEnum
CREATE TYPE "TypePerson" AS ENUM ('FISICA', 'JURIDICA');

-- AlterTable
ALTER TABLE "Clients" ADD COLUMN     "typePerson" "TypePerson" NOT NULL DEFAULT 'FISICA';
