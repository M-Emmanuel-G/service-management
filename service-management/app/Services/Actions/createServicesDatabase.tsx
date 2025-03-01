"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface CreateServiceProps{
    value: number
    description: string
    service: string
}

const CreateServicesDatabase = async (params:CreateServiceProps) => {
   try {
    if(!params.description || !params.service || !params.value) return "Todos os campos precisam ser preenchidos!"
    if(isNaN(params.value)) return "O valor precisa ser numero!"

    await db.services.create({
        data:{
            description:params.description,
            service:params.service,
            value:params.value
        }
    })

    revalidatePath("/Services")
    return "Serviço adicionado com sucesso!"

   } catch (error:any) {
    return error.message
   }
}
 
export default CreateServicesDatabase;