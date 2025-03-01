import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { Clients } from "@prisma/client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import CreateClient from "../components/CreateClients/createClient";

const ClientsPage = async () => {

    const getClients = await db.clients.findMany()

    const showClients = getClients.map((client:Clients, key:number)=>{
        return(
            <Card className="w-full h-10 p-4 my-2 flex justify-between" key={client.id}>
                <CardTitle>{client.nameClient}</CardTitle>
                <CardContent className=" h-full flex items-center justify-center">
                    <Pencil className="mx-2"/>
                    <Trash2 className="mx-2"/>
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