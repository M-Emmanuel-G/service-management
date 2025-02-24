"use server"

import { db } from "@/lib/prisma"
import { EnumQuote } from "@prisma/client"
import { revalidatePath } from "next/cache"

interface SendQuoteProps{
    itemOne:string,
    itemTwo:string
    itemThree:string
    itemFour:string
    itemFive:string
    itemSix:string
    itemSeven:string
    itemEight:string
    itemNine:string
    itemTen:string
    registerID:string
}

const SendQuoteDatabase = async (params:SendQuoteProps) => {
   try {

        if(!params.itemOne) return "O primeiro item não pode estar vazio!"

        const getRegisterService = await db.registerService.findUnique(
            {
                where:{
                    id:params.registerID
                }
            }
        )

        if(!getRegisterService) return "Serviço não encontrado!"

        await db.quote.create({
            data:{
                itemOne:params.itemOne,
                itemTwo:params.itemTwo,
                itemThree:params.itemThree,
                itemFour:params.itemFour,
                itemFive:params.itemFive,
                itemSix:params.itemSix,
                itemSeven:params.itemSeven,
                itemEight:params.itemEight,
                itemNine:params.itemNine,
                itemTen:params.itemTen,
                registerServiceID:params.registerID
            }
        })

        await db.registerService.update({
            data:{
                sendQuote:EnumQuote.Enviado
            },
            where:{
                id:params.registerID
            }
        })

        revalidatePath("/HomePage")

        return "Orçamento enviado com sucesso!"

   } catch (error:any) {
    return error.message
   }
}
 
export default SendQuoteDatabase;