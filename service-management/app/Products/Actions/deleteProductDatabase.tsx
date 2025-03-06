"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface DeleteProductProps{
    id:string
}

const DeleteProductDatabase = async (params: DeleteProductProps) => {
   try {
     const verifyProduct = await db.products.findUnique({
                where:{
                    id:params.id
                }
            })
            if(!verifyProduct) return "Produto não encontrado!"

            await db.products.delete({
                where:{
                    id: params.id
                }
            })

            revalidatePath("/Products")
            return "Produto foi excluido com sucesso!"
   } catch (error:any) {
    return error.message
   }
}
 
export default DeleteProductDatabase;