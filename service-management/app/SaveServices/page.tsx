import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { Clients, Services } from "@prisma/client";
import InputSaveServices from "../components/FormInputSaveServices/input";
import InputSaveClients from "../components/FormInputSaveClients/input";

const SaveServices = async () => {

    const getServices = await db.services.findMany()
    const getClients = await db.clients.findMany()

    const showClients = getClients.map((client:Clients, key:number)=>{
        return (
            <InputSaveClients
                key={client.id}
                client={client}
            />
        )
    })

    const showServices = getServices.map((service:Services, key:number)=>{
        return (
            <InputSaveServices
                key={service.id}
                service={service}
            />
        )
    })

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center">
                <form>
                    <section className="flex flex-col">
                        <div className="flex flex-col my-2">
                            <strong className="text-[#fff] text-xl">Cliente:</strong>
                            <select className="w-80 h-10 my-2 text-center bg-transparent text-[#fff]">{showClients}</select>
                        </div>
                        <div className="flex flex-col my-2">
                            <strong className="text-[#fff] text-xl">Servicos:</strong>
                            <select className="w-80 h-10 my-2 text-center bg-transparent text-[#fff]">{showServices}</select>
                        </div>
                  </section>
                </form>
            </section>
        </main>
     );
}
 
export default SaveServices;