"use server"

import { db } from "@/lib/prisma"

interface BudgetProps{
    registerServiceID:string
}

const CreateBudget = async (params: BudgetProps) => {
    try {

        const getBudget = await db.quote.findUnique({
            where:{
              registerServiceID: params.registerServiceID
            }
          })

          if(getBudget) return "Já existe um orçamento para este cliente"

        await db.quote.create({
            data:{
                registerServiceID: params.registerServiceID,
            }
        })

        return "Orcamento criado com sucesso e esta em aberto!"

    } catch (error:any) {
        return error.message
    }
}
 
export default CreateBudget;