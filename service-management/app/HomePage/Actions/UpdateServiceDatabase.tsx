"use server"

import { GenerateDate } from "@/app/ServicesDatabase/GenerateDate"
import { db } from "@/lib/prisma"
import { Status } from "@prisma/client"
import { revalidatePath } from "next/cache"

interface UpdateStatusProps{
    id:string
    status:string
}

const  UpdateStatusDatabase = async (params:UpdateStatusProps) => {
    try {
        const getRegister = await db.registerService.findUnique({
            where:{
                id:params.id
            }
        })
        
        if(!getRegister) return "O registro do serviço não foi encontrado!"
        
        if(params.status === Status.Orcamento){
            await db.registerService.update({
                data:{
                    status: Status.Aguardando,
                },
                where:{
                    id:params.id
                }
            })
            revalidatePath("/HomePage")
            return `Status foi atualizado para ${Status.Aguardando}`
        }

        if(params.status === Status.Aguardando){
            await db.registerService.update({
                data:{
                    status: Status.Aprovado,
                },
                where:{
                    id:params.id
                }
            })
            revalidatePath("/HomePage")
            return `Status foi atualizado para ${Status.Aprovado}`
        }

        if(params.status === Status.Aprovado) {
            await db.registerService.update({
                data:{
                    status: Status.Iniciado,
                    deliveryDate:GenerateDate.dateDelivery(),
                    startDate: GenerateDate.dateStart()
                },
                where:{
                    id:params.id
                }
            })
            revalidatePath("/HomePage")
            return `Status foi atualizado para ${Status.Iniciado}`
        }

        if(params.status === Status.Iniciado) {
            await db.registerService.update({
                data:{
                    status: Status.Finalizado,
                },
                where:{
                    id:params.id
                }
            })

            revalidatePath("/HomePage")
            return `Status foi atualizado para ${Status.Finalizado}`
        }

        return "Status atualizado com sucesso!"
    } catch (error:any) {
        return error.message
    }
}
 
export default UpdateStatusDatabase;