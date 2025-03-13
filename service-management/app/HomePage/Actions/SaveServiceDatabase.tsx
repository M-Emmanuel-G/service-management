"use server"

import { GenerateDate } from "@/app/ServicesDatabase/GenerateDate";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface SaveServiceProps{
    description: string
    serviceID: string
    clientID:string
}

const SaveServicesDatabase = async (params:SaveServiceProps) => {

    try {

        if(!params.description) return "O campo descrição está vazio!"

        const getClient = await db.clients.findUnique({
            where:{
                id:params.clientID
            }
        })

        const getService= await db.services.findUnique({
            where:{
                id:params.serviceID
            }
        })

        if(!getClient) return "Cliente não encontrado!"
        if(!getService) return "Servico não encontrado!"

        const registerService = await db.registerService.create({
            data:{
                date: GenerateDate.dateNow(),
                registrationDate: GenerateDate.dateNow(),
                startDate :"Indisponivel",
                deliveryDate :"Indisponivel",
                descriptionOne :params.description,
                descriptionTwo :"",
                clientID:params.clientID,
                serviceID:params.serviceID
            }
        })

        await db.quote.create({
            data:{
                clientID:params.clientID

            }
        })

        revalidatePath("/HomePage")
        return "Ordem de serviço foi criada!"
        
    } catch (error:any) {
        return error.message
    }

}
 
export default SaveServicesDatabase;