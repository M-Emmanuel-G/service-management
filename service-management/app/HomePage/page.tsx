import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import LastServiceCard from "../components/LastServices/lastService";
import { Clients, EnumQuote, Quote, Services, Status } from "@prisma/client";
import ServicesSave from "../SaveServices/components/saveServices";

interface GetAllServicesProps{
  id: string 
  date: string
  registrationDate: string
  startDate: string
  deliveryDate: string
  descriptionOne: string
  descriptionTwo: string
  sendQuote: EnumQuote
  status: string
  client: Clients | null
  quote: Quote | null
}

interface QuoteProps{
  quote:Quote
}

const HomePage = async () => {
  
  const getServices = await db.services.findMany()
  const getClients = await db.clients.findMany()

  const getAllServices = await db.registerService.findMany({
    include:{
      client:true,
      quote:true
    }
  }) as any

  const showAllClients = getClients.map((client:Clients, key:number)=>{
      return client
  })

  const showAllServices = getServices.map((service:Services)=>{ 
      return service
  })
  
  const showServices = getAllServices.map((service:GetAllServicesProps, key:number)=>{
    
    return (
      <LastServiceCard
        status={service.status as Status}
        id={service.id}
        key={service.id }
        description={service.descriptionOne}
        startDate={service.startDate}
        client={service.client}
        deliveryDate={service.deliveryDate}
        registrationDate={service.registrationDate}
        sendQuote={service.sendQuote}
        quote={service.quote}
      />
    )
  })

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
        <Header
          pageName="Inicio"
        />
        <section className="w-full h-[90%] flex items-center justify-center">
          <section className="w-full h-full flex flex-col px-4 overflow-y-auto">
            {showServices} 
          </section>
        </section>
        <ServicesSave
          service={showAllServices}
          clients={showAllClients}
        />
      </main>
     );
}
 
export default HomePage;