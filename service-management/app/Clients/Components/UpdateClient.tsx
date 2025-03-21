"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import UpdateClientDatabase from "../Actions/UpdateClientDatabase";
import { Clients, TypePerson } from "@prisma/client";
  
interface UpdateClientProps{
    id:string,
    nameClient:string
    address:string
    typePerson:TypePerson
}

const UpdateClient = (params:UpdateClientProps) => {

    const [nameClient, setNameClient] = useState<string>(params.nameClient);
    const [address, setAddress] = useState<string>(params.address);
    const [typePerson, setTypePerson] = useState<string>(params.typePerson);

    // const verifyTypePerson = ()=> {
    //     if(typePerson === "FISICA"){
    //         return (
    //             <div className="my-2 py-2">
    //                 <legend>CPF</legend>
    //                 <Input value={cpf} onChange={(ev)=>{setCpf(ev.target.value)}}/>
    //             </div>
    //         ) 
            
    //     }
    //     else if(typePerson === "JURIDICA"){
    //         return(
    //             <div className="my-2 py-2">
    //                 <legend>CNPJ</legend>
    //                 <Input value={cnpj} onChange={(ev)=>{setCnpj(ev.target.value)}}/>
    //             </div>
    //         )
    //     }
    // }

    const updateClientDatabase = async()=>{

        const body= {
            id:params.id,
            address:params.address,
            nameClient:params.nameClient,
            typePerson:params.typePerson
        }
        const response = await UpdateClientDatabase(body)
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Pencil width={30} height={30}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Atualize os dados do cliente</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <section>
                    <form>
                        <div className="w-full flex justify-evenly my-4">
                            <strong>Cliente declarado como pessoa: {params.typePerson}</strong>
                        </div>
                        <div>
                            <legend className="font-bold">Nome do Cliente:</legend>
                            <Input
                            className="my-2"
                                value={nameClient}
                                onChange={(ev=>{setNameClient(ev.target.value)})}
                            />
                        </div>
                        <div>
                            <legend className="font-bold">Endereço:</legend>
                            <Input
                            className="my-2"
                                value={address}
                                onChange={(ev=>{setAddress(ev.target.value)})}
                            />
                        </div>
                    </form>
                </section>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={updateClientDatabase}>Atualizar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default UpdateClient;