import { db } from '@/lib/prisma';
import moment from 'moment';
moment.locale('pt-br');

export abstract class Services{
    static GetProducts = async ()=>{
      try {
       const products = await db.products.findMany()
       const response = products.map((product)=>{ return product})
       return response
    } catch (error:any) {
        return error.message
      }
    }

}