import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { Clients } from "@prisma/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import CreateClient from "../components/CreateClients/createClient";
import DeleteClient from "./Components/DeleteClient";
import UpdateClient from "./Components/UpdateClient";

const ClientsPage = async () => {

    const getClients = await db.clients.findMany()

    const showClients = getClients.map((client:Clients, key:number)=>{
        return(
            <Card className="w-full h-16 flex items-center justify-between" key={client.id}>
                <CardContent className=" w-full h-full flex items-center justify-between">
                    <div className="mt-4">
                        <strong className="text-xl">{client.nameClient}</strong>
                    </div>
                    <div className="flex items-center mt-4">
                        <UpdateClient
                            address={client.address}
                            cnpj={client.cnpj}
                            cpf={client.cpf}
                            id={client.id}
                            nameClient={client.nameClient}
                            typePerson={client.typePerson}

                        />
                        <DeleteClient
                            id={client.id}
                            nameClient={client.nameClient}
                        />
                    </div>
                </CardContent>
            </Card>
        )
    })

    return ( 
        <main className="w-screen h-screen flex items-center justify-center flex-col">
            <Header
                pageName="Clientes"
            />
            <section className="w-full h-[10%] flex items-center justify-center">
                <CreateClient/>
            </section>
            <section className="w-full h-[80%] flex items-center flex-col px-4">
                {showClients}
            </section>
        </main>
     );
}
 
export default ClientsPage;