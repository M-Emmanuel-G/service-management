"use server"

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
        if(params.status === Status.Aprovado) newStatus = Status.Finalizado
        if(params.status === Status.Finalizado) return "O serviço ja foi finalizado!"

        await db.registerService.update({
            data:{
                status:newStatus
            },
            where:{
                id:params.id
            }
        })

        revalidatePath("/HomePage")
        return "Status atualizado com sucesso!"
    } catch (error:any) {
        return error.message
    }
}
export default UpdateServiceDatabase;

