"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface AddProductsProps{
    quantity:number
    productID: string
    quoteID:string
}

const AddProductsToBudgetDatabase = async (params:AddProductsProps) => {
    try {

        const getBudget = await db.quote.findUnique({
            where:{
                id:params.quoteID
            }
        })

        const getProduct = await db.products.findUnique({
            where:{
                id: params.productID
            }
        })

        if(!getProduct) return "Produto não encontrado!"
        if(!getBudget) return "Orçamento não encontrado!"
        if(!params.quantity) return "Quantidade não informada!"
        if(isNaN(params.quantity)) return "Formato invalido. Será aceito somente numeros!"

        await db.prepareQuote.create({
            data:{
                quantity:params.quantity,
                subTotal:(params.quantity * Number(getProduct?.value)),
                productID:params.productID,
                quoteID:params.quoteID
            }
        })

        revalidatePath(`RegisterService`)

        return `${getProduct?.product} foi adicionado!`

    } catch (error:any) {
        return error.message
    }
}
 
export default AddProductsToBudgetDatabase;