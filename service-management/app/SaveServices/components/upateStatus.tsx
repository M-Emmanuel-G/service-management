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
  
interface UpdateStatusProps{
    id:string
    status:Status
}

const UpdateStatus = (params:UpdateStatusProps) => {


    const updateStatusDatabase = async()=>{
        try {
            const result = await UpdateServiceDatabase({status:params.status, id:params.id})
            alert(result)
        } catch (error:any) {
            alert(error.message)
        }
    }

    const verifyStatus =()=>{
        if(params.status === Status.Aguardando) return "Aguardando aprovação do cliente!"
        if(params.status === Status.Aprovado) return "Cliente aprovou o orcamento!"
        if(params.status === Status.Orcamento) return "Cliente aguardando envio do orçamento"
        if(params.status === Status.Finalizado) return "Serviço foi entregue!"
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger>
                <Pencil className="mx-2 relative top-1" width={25} height={25}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Atualizar o Status</AlertDialogTitle>
                    <section className="bg-[#656565] text-white w-full rounded-xl">
                        <div className="my-4 ">
                            <strong>Status atual: </strong>
                            <span>{params.status}</span>
                        </div>
                        <div className="my-4 ">
                            <span>{verifyStatus()}</span>
                        </div>
                    </section>
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