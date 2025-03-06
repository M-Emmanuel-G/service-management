"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface SaveProductsProps{
    product:string
    value:number
}

const SaveProductsDatabase = async (params:SaveProductsProps) => {
   try {
    if(!params.value) return "O valor do produto nao foi inserido!"
    if(!params.product) return "O nome do produto nao foi inserido!"

    if(isNaN(params.value)) return "O valor precisa ser um numero!"
    if(params.value < 0 ) return "O valor não pode ser valor negativo!"

    await db.products.create({
        data:{
            product: params.product,
            value: String(params.value)
        }
    })

    revalidatePath("/Products")
    return "Produto foi adicionado com sucesso!"
   } catch (error:any) {
    return error.message
   }
}
 
export default SaveProductsDatabase;