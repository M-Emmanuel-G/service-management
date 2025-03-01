"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface DeleteServiceProps{
    id:string
}

const DeleteServiceDatabase = async (params:DeleteServiceProps) => {
    try {
        const getService = await db.services.findUnique({
            where:{
                id:params.id
            }
        })

        if(!getService) return "Serviço não encontado!"

        await db.services.delete({
            where:{
                id:params.id
            }
        })

        revalidatePath("/Services")
        return "O serviço foi excluido com sucesso!"

    } catch (error:any) {
        return error.message
    }
}
 
export default DeleteServiceDatabase;