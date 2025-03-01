import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import CreateServices from "./Components/CreateServices";
import { Services } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import UpdateServices from "./Components/updateServices";
import DeleteServices from "./Components/updateServices copy";

const ServicesPage = async () => {

  const getServices = await db.services.findMany()

  const showServices = getServices.map((service:Services, key:number)=>{
    return(
      <Card className="w-full h-24 flex items-center justify-between p-2" key={service.id}>
        <CardTitle>{service.service}</CardTitle>
        <CardDescription className="flex flex-col">
          {service.description}
          <span className="font-bold text-xl">R$ {Number(service.value).toFixed(2)}</span>
        </CardDescription>
        <CardContent className=" h-10 flex items-center justify-center">
          <UpdateServices
            id={service.id}
            description={service.description}
            service={service.service}
            value={Number(service.value)}
         />
          <DeleteServices
            id={service.id}
          />
        </CardContent>
      </Card>
    )
  })

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
          <Header
            pageName="Serviços"
          />
          <section className="w-full h-[10%] flex items-center justify-center">
            <CreateServices/>
          </section>
          <section className="w-full h-[80%] flex-col px-4 overflow-y-auto">
              {showServices}
          </section>
        </main>
     );
}
 
export default ServicesPage;