"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface createClientProps{
    nameClient:string
    address:string
    cpf:string
    cnpj:string
    typePerson:string
}

const CreateClientDatabase = async (params:createClientProps) => {
    try {
        if(!params.nameClient) return "Nome do cliente não inserido!"
        if(!params.address) return "Endereço do cliente não inserido!"

        const getClientByCPF = await db.clients.findUnique({
            where:{
               cpf: params.cpf 
            }
        })
        const getClientByCNPJ = await db.clients.findUnique({
            where:{
               cpf: params.cnpj
            }
        })

        if(getClientByCNPJ) return "Cliente já cadastrado com este CNPJ"
        if(getClientByCPF) return "Cliente já cadastrado com este CPF"
        

        if(params.typePerson === "FISICA"){
            if(params.cpf.length !== 11) return "CPF precisa conter 11 digitos!"
            if(!params.cpf) return "CPF nao inserido!"
            await db.clients.create({
                data:{
                    address:params.address,
                    cpf:params.cpf,
                    nameClient:params.nameClient
                }
            })
            revalidatePath("/Clients")
            
            return "Cliente cadastrado com sucesso!"
        }

        if(params.typePerson === "JURIDICA"){
            if(params.cnpj.length !== 14) return "CNPJ precisa conter 14 digitos!"
             if(!params.cnpj) return "CNPJ nao inserido!"
            await db.clients.create({
                data:{
                    address:params.address,
                    cnpj:params.cnpj,
                    nameClient:params.nameClient
                }
            })

            revalidatePath("/Clients")
            
            return "Cliente cadastrado com sucesso!"
            
        }
    } catch (error:any){
        console.log(error.message);
        
        return error.message
    }
}
 
export default CreateClientDatabase;