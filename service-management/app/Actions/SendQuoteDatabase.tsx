"use server"

import { db } from "@/lib/prisma"
import { EnumQuote } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { GenerateDate } from "../ServicesDatabase/GenerateDate"

interface SendQuoteProps{
    quantity:number
    productID:string
    registerServiceID: string
}

const SendQuoteDatabase = async (params:SendQuoteProps) => {
   try {


        const getRegisterService = await db.registerService.findUnique(
            {
                where:{
                    id:params.registerServiceID
                }
            }
        )

        if(!getRegisterService) return "Serviço não encontrado!"

        await db.quote.create({
            data:{
                dateCreated:GenerateDate.dateNow(),
                quantity:params.quantity,
                productID: params.productID,
                registerServiceID: params.registerServiceID
            }
        })

        await db.registerService.update({
            data:{
                sendQuote:EnumQuote.Enviado
            },
            where:{
                id:params.registerServiceID
            }
        })

        revalidatePath("/HomePage")

        return "Orçamento enviado com sucesso!"

   } catch (error:any) {
    return error.message
   }
}
 
export default SendQuoteDatabase;