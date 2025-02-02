import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import LastServiceCard from "../components/LastServices/lastService";
import { Clients } from "@prisma/client";

const HomePage = async () => {

  interface GetAllServicesProps{
    id: string 
    date: string
    registrationDate: string
    startDate: string
    deliveryDate: string
    descriptionOne: string
    descriptionTwo: string
    status: string
    client: Clients | null
  }

  const getAllServices = await db.registerService.findMany({
    include:{
      client:true,
    }
    
  })

  const showServices = getAllServices.map((service:GetAllServicesProps, key:number)=>{
    
    return (
      <LastServiceCard
        status={service.status}
        id={service.id}
        key={service.id }
        description={service.descriptionOne}
        startDate={service.startDate}
        client={service.client}
        deliveryDate={service.deliveryDate}
        registrationDate={service.registrationDate}
      />
    )
  })

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center">
        <Header/>
        <section className="w-full h-[90%] flex items-center justify-center">
          <section className="w-full h-full flex flex-col px-4 overflow-y-auto">
            {showServices}
          </section>
        </section>
      </main>
     );
}
 
export default HomePage;