"use server"

import { db } from "@/lib/prisma"
import { Clients, TypePerson } from "@prisma/client"

interface UpdateClientProps{
    id:string
    nameClient:string
    address: string
    cnpj: string
    cpf:string
}

const UpdateClientDatabase = async (params:Clients) => {
   try {

    if(!params.nameClient) return "Nome do cliente não inserido!"
    if(!params.address) return "Endereço do cliente não inserido!"

    if(params.typePerson === TypePerson.FISICA ){
        if(!params.cpf) return "CPF do cliente não inserido!"
    } 

    if(params.typePerson === TypePerson.JURIDICA){
        if(!params.cnpj) return "CNPJ do cliente não inserido!"
    }

    await db.clients.update({
        data:{
            address:params.address,
            cnpj:params.cnpj,
            nameClient:params.nameClient,
            cpf: params.cpf
            
        },
        where:{
            id: params.id
        }
    })


   } catch (error:any) {
    return error.message
   }
}
 
export default UpdateClientDatabase;