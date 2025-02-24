import { db } from '@/lib/prisma';
import moment from 'moment';
moment.locale('pt-br');

export abstract class Services{
    static getEachQuote = async (id:string)=>{
      try {
        if(!id) return "id nao inserido!"
        const response =  await db.registerService.findUnique({
            where:{
                id
            },
            include:{
                quote:true
            }
        })

        if(!response) return "registro nao encontrado!"
        
        return response
      
    } catch (error:any) {
        return error.message
      }
    }

}