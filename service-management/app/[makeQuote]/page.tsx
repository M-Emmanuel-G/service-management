import { db } from "@/lib/prisma";
import Header from "../components/Header/header";

interface SendQuoteProps{
    params: Promise<{SendQuote:string}>
}

const MakeQuote = async ({params}:SendQuoteProps) => {
    
    const response = await params

    const getRegisterService = await db.registerService.findUnique({
            where:{
                id: response.SendQuote
            },
            include:{
                client:true,
                quote:true,
                service:true
            }
        })

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
        <Header
            pageName="Criar Orçamento"
        />
        <section className="w-full h-[60%] flex flex-col items-center py-4 text-white overflow-auto">
            <form></form>
        </section>
    </main>
    );
}
 
export default MakeQuote;