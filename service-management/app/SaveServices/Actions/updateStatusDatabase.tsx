"use server"

import { GenerateDate } from "@/app/Services/GenerateDate";
import { db } from "@/lib/prisma";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface UpdateStatusProps{
    status:Status
    id:string
}

const UpdateServiceDatabase = async (params:UpdateStatusProps) => {
    try {

        let newStatus = params.status as Status

        if(!params.status) return "Status não encontrado!"
        if(params.status === Status.Orcamento) newStatus = Status.Aguardando
        if(params.status === Status.Aguardando) newStatus = Status.Aprovado
        if(params.status === Status.Aprovado) newStatus = Status.Iniciado
        if(params.status === Status.Iniciado) newStatus = Status.Finalizado
        if(params.status === Status.Atrasado) newStatus = Status.Finalizado
        if(params.status === Status.Finalizado) return "O serviço já foi finalizado!"

        if(params.status === Status.Aprovado){
            await db.registerService.update({
                data:{
                    status:newStatus,
                    startDate: GenerateDate.dateStart(),
                    deliveryDate:GenerateDate.dateDelivery(),
                    registrationDate:GenerateDate.dateNow()
                },
                where:{
                    id: params.id
                }
            })
        }

        revalidatePath("/HomePage")
        return "Status atualizado com sucesso!"
    } catch (error:any) {
        return error.message
    }
}
export default UpdateServiceDatabase;

