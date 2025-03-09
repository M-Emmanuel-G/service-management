"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface PrepareQuoteProps{
    quantity:number
    productID: string
    quoteID: string
    registerServiceID: string
    productValue: number
}

const PrepareQuoteDatabase = async (params:PrepareQuoteProps) => {
 try {
    await db.prepareQuote.create({
        data:{
            quantity:params.quantity,
            subTotal:(params.quantity * params.productValue),
            quoteID:params.quoteID,
            productID: params.productID,
            registerServiceID: params.registerServiceID
        }
    })
    revalidatePath("/HomePage")
    return "Produto adicionado!"
 } catch (error:any) {
    return error.message
 }
}
 
export default PrepareQuoteDatabase;