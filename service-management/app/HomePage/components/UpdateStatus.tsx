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
import { Status } from "@prisma/client"
import UpdateStatusDatabase from "../Actions/UpdateServiceDatabase"

  interface UpdateStatusProps{
    id:string
    status:string
  }

const UpdateStatus = (params:UpdateStatusProps) => {

    const verifyStatus = ()=>{

        let newStatus

        if(params.status === Status.Orcamento) newStatus = Status.Aguardando
        if(params.status === Status.Aguardando) newStatus = Status.Aprovado
        if(params.status === Status.Aprovado) newStatus = Status.Iniciado
        if(params.status === Status.Iniciado) newStatus = Status.Finalizado

        return(
            <>
                <div className="w-full flex justify-between">
                    <strong>Status atual:</strong>
                    <span>{params.status}</span>
                </div>
                <div className="w-full flex justify-between">
                    <strong>Status atualizado:</strong>
                    <span>{newStatus}</span>
                </div>

            </>
        )
    }

    const UpdateServicesDatabase = async ()=>{
        const response = await UpdateStatusDatabase(
            {
                id: params.id,
                status: params.status
            }
        )

        alert(response)
    }

    return ( 
        <AlertDialog>
        <AlertDialogTrigger className="text-black my-2 font-bold">Atualizar Status</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Atualize o status:</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
            </AlertDialogHeader>
                    {verifyStatus()}
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={UpdateServicesDatabase} >Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
     );
}
 
export default UpdateStatus;