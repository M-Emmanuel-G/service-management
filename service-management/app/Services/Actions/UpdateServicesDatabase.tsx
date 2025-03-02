"use server"

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface UpdateServicesProps{
    service:string,
    description:string,
    id:string,
    value:number
}

const UpdateServiceDatabase = async (params:UpdateServicesProps) => {
    try {
        const getService = await db.services.findUnique({
            where:{
                id:params.id
            }
        })

        if(!getService) return "Serviço não encontrado!"

        if(!params.description && !params.service && !params.value) return "Todos os campos nao podem estar vazios!"

         await db.services.update({
            data:{
                description: params.description,
                service:params.service,
                value:params.value
            },
            where:{
                id:params.id
            }
        })

        revalidatePath("/Services")
        return "Serviço atualizado com sucesso!"
        
    } catch (error:any) {
        return error.message
    }
}
 
export default UpdateServiceDatabase;