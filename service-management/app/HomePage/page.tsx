import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import LastServiceCard from "../components/LastServices/lastService";

const HomePage = async () => {

  const getAllServices = await db.serviceBudget.findMany({
    include:{
      client:true,
      service:true
    }
    
  })

  const showServices = getAllServices.map((service:any, key:number)=>{
    console.log(service);
    
    return (
      <LastServiceCard
        id={service.id}
        key={service.id }
        client={service.client.nameClient}
        description={service.description}
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