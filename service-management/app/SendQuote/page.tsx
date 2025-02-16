import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { Button } from "@/components/ui/button";

interface SendQuoteProps{
    id:string
}

const SendQuote = async (id:SendQuoteProps) => {

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center py-4">
            <form className="text-white flex flex-col items-center">
                <h2 className="text-2xl my-2">Enviar Orcamento</h2>
                <h2 className="text-2xl my-2">{id.id}</h2>
                <h3 className="text-xl my-2">Materias necessarios</h3>
                <textarea
                    className="outline-none text-black"
                    cols={40}
                    rows={26}
                />
                <Button className="w-96 h-10 my-6 bg-sky-400 hover:bg-sky-400 text-black font-bold text-xl">Enviar Orçamento</Button>
            </form>
        </section>
    </main>
    );
}
 
export default SendQuote;