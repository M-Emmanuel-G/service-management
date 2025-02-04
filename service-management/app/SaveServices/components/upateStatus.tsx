"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Status } from "@prisma/client";
import { Pencil } from "lucide-react";
import UpdateServiceDatabase from "../Actions/updateStatusDatabase";
import { useState } from "react";
  
interface UpdateStatusProps{
    id:string
}

const UpdateStatus = (params:UpdateStatusProps) => {

    const [ status, setStatus] = useState<Status>(Status.Aguardando)

    const updateStatusDatabase = async()=>{
        try {
            const result = await UpdateServiceDatabase({status, id:params.id})
            alert(result)
        } catch (error:any) {
            alert(error.message)
        }
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger>
                <Pencil className="mx-2 relative top-1" width={25} height={25}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Atualizar o Status</AlertDialogTitle>
                    <select >
                        <option onClick={()=>{setStatus(Status.Aguardando)}}>{Status.Aguardando}</option>
                        <option onClick={()=>{setStatus(Status.Aprovado)}}>{Status.Aprovado}</option>
                        <option onClick={()=>{setStatus(Status.Finalizado)}}>{Status.Finalizado}</option>
                        <option onClick={()=>{setStatus(Status.Orcamento)}}>{Status.Orcamento}</option>
                    </select>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={updateStatusDatabase}>Confirmar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
 
export default UpdateStatus;