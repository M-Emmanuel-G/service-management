-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "nameClient" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegisterService" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "registrationDate" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "deliveryDate" TEXT NOT NULL,
    "descriptionOne" TEXT NOT NULL,
    "descriptionTwo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Aguardando aprovaçao',
    "clientID" TEXT NOT NULL,
    "serviceID" TEXT NOT NULL,

    CONSTRAINT "RegisterService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceBudget" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "serviceID" TEXT NOT NULL,
    "clientID" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Realizar Orçamento',

    CONSTRAINT "ServiceBudget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clients_cnpj_key" ON "Clients"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_cpf_key" ON "Clients"("cpf");

-- AddForeignKey
ALTER TABLE "RegisterService" ADD CONSTRAINT "RegisterService_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegisterService" ADD CONSTRAINT "RegisterService_serviceID_fkey" FOREIGN KEY ("serviceID") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceBudget" ADD CONSTRAINT "ServiceBudget_serviceID_fkey" FOREIGN KEY ("serviceID") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceBudget" ADD CONSTRAINT "ServiceBudget_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
