"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface UpdateClientProps{
    id:string,
    product:string
    value:number
}

const UpdateClientDatabase = async(params:UpdateClientProps) => {
    try {
        const verifyProduct = await db.products.findUnique({
            where:{
                id:params.id
            }
        })
        if(!verifyProduct) return "Produto não encontrado!"
        if(!params.value) return "O valor do produto não foi inserido!"
        if(!params.product) return "O nome do produto não foi inserido!"
    
        if(isNaN(Number(params.value))) return "O valor precisa ser um numero!"
        if(Number(params.value) < 0 ) return "O valor não pode ser valor negativo!"

        await db.products.update({
            data:{
                product: params.product,
                value:String(params.value)
            },
            where:{
                id: params.id
            }
        })

        revalidatePath("/Products")
        return "O produto foi atualizado!"

    } catch (error:any) {
        return error.message
    }
}
 
export default UpdateClientDatabase;