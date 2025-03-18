import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";

interface SendQuoteProps{
    params: Promise<{SendQuote:string}>
}

const SendQuote = async ({params}:SendQuoteProps) => {

    const response = await params


 

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative px-8">
        <Header
            pageName="Detalhes do orçamento"
        />
      
    </main>
    );
}
 
export default SendQuote;