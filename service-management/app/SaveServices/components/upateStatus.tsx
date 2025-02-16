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
import UpdateServiceDatabase from "../Actions/updateStatusDatabase";
  
interface UpdateStatusProps{
    id:string
    status:Status
}

const UpdateStatus = (params:UpdateStatusProps) => {

    const verifyStatus =()=>{
        if(params.status === Status.Aguardando) return "Aguardando aprovação do cliente!"
        if(params.status === Status.Atrasado) return "O serviço está em atraso!"
        if(params.status === Status.Iniciado) return "O serviço está em andamento!"
        if(params.status === Status.Aprovado) return "Cliente aprovou o orcamento!"
        if(params.status === Status.Orcamento) return "Cliente aguardando envio do orçamento"
        if(params.status === Status.Finalizado) return "Serviço foi entregue!"
    }

    const confirmStatus = ()=>{
        if(params.status === Status.Orcamento) return Status.Aguardando
        if(params.status === Status.Aguardando) return Status.Aprovado
        if(params.status === Status.Aprovado) return Status.Iniciado
        if(params.status === Status.Iniciado) return Status.Finalizado
    }

    const updateStatusDatabase = async()=>{
        try {
            const result = await UpdateServiceDatabase({status:params.status, id:params.id})
            alert(result)
        } catch (error:any) {
            alert(error.message)
        }
    }


    return ( 
        <AlertDialog>
            <AlertDialogTrigger className=" my-4 font-bold">
                Editar
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
                        <div className="my-4 ">
                            <strong>Atualizar para: </strong>
                            <span>{confirmStatus()}</span>
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