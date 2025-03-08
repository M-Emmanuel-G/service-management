import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { Clients } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import CreateClient from "../components/CreateClients/createClient";
import DeleteClient from "./Components/DeleteClient";
import UpdateClient from "./Components/UpdateClient";
import { Separator } from "@/components/ui/separator";

const ClientsPage = async () => {

    const getClients = await db.clients.findMany()

    const showClients = getClients.map((client:Clients, key:number)=>{
        return(
            <Card key={client.id} className="w-96 h-32 my-2 p-0 bg-white rounded-xl">
            <CardContent className="w-full h-full flex p-0">
                <div className="w-4/6 h-full flex flex-col items-center justify-center gap-y-4">
                    <CardTitle>{client.nameClient}</CardTitle>
                    <CardDescription>{client.address}</CardDescription>
                </div>
                <Separator className="w-1 rounded-xl h-full bg-black" orientation="vertical"/>
                <div className="w-2/6 h-full flex flex-col items-center justify-center">
                    <div className="w-full h-1/2 flex items-center justify-center">
                        <UpdateClient
                            address={client.address}
                            id={client.id}
                            nameClient={client.nameClient}
                            typePerson={client.typePerson}
                        />
                    </div>
                    <div className="w-full h-1/2 flex items-center justify-center">
                        <DeleteClient
                            id={client.id}
                            nameClient={client.nameClient}
                        />
                    </div>
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