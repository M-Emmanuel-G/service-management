"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface DeleteClientProps{
    id:string
}

const DeleteClientDatabase = async (params:DeleteClientProps) => {
    try {
        const verifyClient = await db.clients.findUnique({
            where:{
                id:params.id
            }
        })

        if(!verifyClient) return "Cliente não encontrado!"

        await db.clients.delete({
            where:{
                id:params.id
            }
        })
        revalidatePath("Clients")
        return " Cliente excluido com sucesso!"
    } catch (error:any) {
        return error.message
    }
}
 
export default DeleteClientDatabase;