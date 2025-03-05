"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface PrepareQuoteProps{
    quantity:number
    productID: string
    quoteID: string
}

const PrepareQuoteDatabase = async (params:PrepareQuoteProps) => {
 try {
    await db.prepareQuote.create({
        data:{
            quantity:params.quantity,
            productID: params.productID,
            quoteID: params.quoteID,

        }
    })
    revalidatePath("/HomePage")
 } catch (error:any) {
    return error.message
 }
}
 
export default PrepareQuoteDatabase;