"use server"

import { db } from "@/lib/prisma"
import { TypePerson } from "@prisma/client"
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
            if(!params.cpf) return "CPF nao inserido!"
            await db.clients.create({
                data:{
                    address:params.address,
                    cnpj:"nulo",
                    cpf:params.cpf,
                    nameClient:params.nameClient
                }
            })
            revalidatePath("/Clients")
            
            return "Cliente cadastrado com sucesso!"
        }
        if(params.typePerson === "JURIDICA"){
             if(!params.cnpj) return "CNPJ nao inserido!"
            await db.clients.create({
                data:{
                    address:params.address,
                    cnpj:params.cnpj,
                    cpf:"nulo",
                    nameClient:params.nameClient
                }
            })

            revalidatePath("/Clients")
            
            return "Cliente cadastrado com sucesso!"

        }
    } catch (error:any){
        return error.message
    }
}
 
export default CreateClientDatabase;