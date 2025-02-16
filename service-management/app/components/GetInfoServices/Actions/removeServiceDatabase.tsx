"use server"

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface RemoveServiceProps{
    id:string
}

const RemoveServiceDatabase = async (params:RemoveServiceProps) => {
    try {

        const verifyService = await db.registerService.findUnique({
            where:{
                id:params.id
            }
        })

        if(!verifyService) return "Ops... O serviço não foi encontrado!"

        await db.registerService.delete({
            where: {
                id: params.id
            }
        })

        revalidatePath("/HomePage")
        return "O serviço foi excluido com sucesso!"
        
    } catch (error:any) {
        return error.message
    }
}
 
export default RemoveServiceDatabase;