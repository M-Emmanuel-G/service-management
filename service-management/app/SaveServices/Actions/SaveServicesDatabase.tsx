"use server"

import { GenerateDate } from "@/app/Services/GenerateDate"
import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface SaveServiceProps{
    clientID:string
    serviceID: string
    description:string
}

const SaveServiceDatabase  = async (params:SaveServiceProps) => {
    try {
        if(!params.clientID) return "Cliente não encontrado!"
        if(!params.serviceID) return "Serviço não encontrado!"
        if(!params.description) return "Descriçâo do serviço não foi inserida!"

        await db.registerService.create({
            data:{
                date:GenerateDate.dateNow(),
                deliveryDate:"Indisponivel!",
                descriptionOne:params.description,
                descriptionTwo:"",
                registrationDate:GenerateDate.dateNow(),
                startDate:"Indisponivel!",
                clientID:params.clientID,
                serviceID:params.serviceID,
                
            }
        })
    
        revalidatePath("/HomePage")
        return "Servico foi registrado com sucesso!"
    } catch (error:any) {
        return error.message
    }

}
 
export default  SaveServiceDatabase;