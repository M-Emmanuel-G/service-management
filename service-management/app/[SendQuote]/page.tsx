import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";

interface SendQuoteProps{
    params: Promise<{SendQuote:string}>
}

const SendQuote = async ({params}:SendQuoteProps) => {

    const response = await params

    const materialsValue = 1582
    const laborValue = ( materialsValue * 0.4 )
    const percentageDiscount = 0.05 
    const finalValue =  materialsValue + laborValue
    const finalValueDiscount = finalValue - (finalValue * percentageDiscount )

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

    if(!getRegisterService) notFound()

    return ( 
        <main className="w-screen h-screen flex flex-col items-center justify-center relative">
        <Header/>
        <section className="w-full h-[60%] flex flex-col items-center py-4 text-white overflow-auto">
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
            <div className="w-full px-4 text-white my-2 flex align-center flex-col">
                <span className="my-2">{getRegisterService.quote[0].itemOne}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemTwo}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemThree}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemFour}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemFive}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemSix}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemSeven}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemEight}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemNine}</span>            
                <span className="my-2">{getRegisterService.quote[0].itemTen}</span>            
            </div>
        </section>
        <Separator className=" w-11/12 h-[1px] bg-white rounded-3xl my-2"/>
        <section className="w-full h-[30%] p-4 rounded-t-xl text-white">
            <div>
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