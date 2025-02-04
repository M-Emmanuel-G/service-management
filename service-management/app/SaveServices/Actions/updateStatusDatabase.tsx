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
        if(!params.status) return "Status não encontrado!"

        await db.registerService.update({
            data:{
                status:params.status
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

