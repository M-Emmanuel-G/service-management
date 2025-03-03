

import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import LastServiceCard from "../components/LastServices/lastService";
import { Clients, EnumQuote, Products, Quote, Services, Status } from "@prisma/client";
import SaveServices from "./components/SaveServices";

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

const HomePage = async () => {
  
  const getServices = await db.services.findMany()
  const getClients = await db.clients.findMany()
  const getProducts = await db.products.findMany()

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
    return {
      id: service.id,
      value: Number(service.value),
      description: service.description,
      service: service.service
    }
  })

  const showAllProducts = getProducts.map((product:Products, key:number)=>{
    return {
      id: product.id,
      createdAt: product.createdAt,
      value: product.value,
      product: product.product
    }
  }) as any
  
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
        products={showAllProducts}
      />
    )
  })

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
        <Header
          pageName="Inicio"
        />
        <section className="w-full h-[10%] flex items-center justify-center">
          <SaveServices
            client={showAllClients}
            services={showAllServices}
          />
        </section>
          <section className="w-full h-[80%] flex flex-col px-4 overflow-y-auto">
            {showServices} 
          </section>
      </main>
     );
}
 
export default HomePage;