import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";

interface SendQuoteProps{
    params: Promise<{SendQuote:string}>
}

const SendQuote = async ({params}:SendQuoteProps) => {

    const response = await params

    const getRegisterService = await db.registerService.findUnique({
        where:{
            id: response.SendQuote
        },
        include:{
            client:true,
            quote:true,
            service:true,
        }
    })

    if(!getRegisterService) notFound()

    const getProducts = await db.quote.findUnique({
        where:{
            id:getRegisterService.quote[0].id
        },
        include:{
            product:true
        }
    })

    if(!getProducts) notFound()

        // const getallProducts = getProducts.map((product)=>{})
    
    const materialsValue = 1582 // Valor total dos materiais
    const laborValue = Number(getRegisterService.service.value)
    const percentageDiscount = 0.05 // Porcentagem de desconto
    const finalValue =  materialsValue + laborValue // Valor final
    const finalValueDiscount = finalValue - (finalValue * percentageDiscount ) // Valor final a vista

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative px-8">
        <Header
            pageName="Detalhes do orçamento"
        />
        <section className="w-full h-[60%] flex flex-col items-center py-4 text-white">
            <h2 className="my-4 text-2xl font-bold">Dados do Orcamento</h2>
            <div className="w-full px-4 text-white my-2 flex justify-between">
                <strong>Cliente:</strong>
                <span>{getRegisterService.client.nameClient}</span>            
            </div>
            <div className="w-full px-4 text-white my-2 flex justify-between">
                <strong>Serviço:</strong>
                <span>{getRegisterService.service.service}</span>            
            </div>

            <Separator className=" w-11/12 h-[1px] bg-white rounded-3xl my-2"/>

            <div className="w-full px-4 text-white my-2 flex justify-center">
                <h2 className="font-bold text-xl">Descritivo</h2>      
            </div>
            <div className="w-full px-4 text-white my-2 flex align-center justify-between">
                <div>
                    <span className="">{getProducts?.quantity}x </span>
                    <span className="mx-2">{getProducts?.product.product}</span>
                </div>
                <div>
                    <span>R${Number(getProducts?.product.value).toFixed(2)}</span>
                </div>
            </div>
        </section>

        <Separator className=" w-11/12 h-[1px] bg-white rounded-3xl my-2"/>

        <section className="w-full h-[30%] p-4 rounded-t-xl text-white">
            <div className="w-full">
                <h2 className="text-xl font-bold text-center">Resumo do Orçamento</h2>
            </div>
            <div className="w-full flex justify-between my-2">
                <strong>Materiais:</strong>
                <span>R$ {materialsValue.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between my-2">
                <strong>Mão de obra:</strong>
                <span>R$ {laborValue.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between my-2">
                <strong>Desconto a vista:</strong>
                <span>{percentageDiscount * 100}%</span>
            </div>
            <div className="w-full flex justify-between my-2">
                <strong>Valor a Prazo:</strong>
                <span>R$ {finalValue.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-between my-2">
                <strong>Valor a Vista:</strong>
                <span>R$ {finalValueDiscount.toFixed(2)}</span>
            </div>
            <div className="w-full flex justify-center pointer-events-auto my-2 text-xl font-bold">
                <span>Gerar PDF</span>
            </div>
        </section>
    </main>
    );
}
 
export default SendQuote;