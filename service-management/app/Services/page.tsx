import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import CreateServices from "./Components/CreateServices";
import { Services } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

const ServicesPage = async () => {

  const getServices = await db.services.findMany()

  const showServices = getServices.map((service:Services, key:number)=>{
    return(
      <Card className="w-full h-10 flex items-center justify-between p-2" key={service.id}>
        <CardTitle>{service.service}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
        <CardContent className=" h-10 flex items-center justify-center">
          <Pencil className="relative top-3 mx-2"/>
          <Trash2 className="relative top-3 mx-2"/>
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