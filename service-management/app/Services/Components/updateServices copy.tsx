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
import { Trash2 } from "lucide-react";
import DeleteServiceDatabase from "../Actions/deleteServiceDatabase";

interface DeleteServicesProps{
    id:string
}

  
  const DeleteServices = (params:DeleteServicesProps) => {

    const deleteServicesDatabase = async (ev:any)=>{

        ev.preventDefault()

        const response = await DeleteServiceDatabase(
            {
                id:params.id
            }
        )
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild className="relative top-3">
                <Trash2 className="mx-2"/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Cuidado!!</AlertDialogTitle>
                <AlertDialogDescription>
                    Deseja realmente excluir este serviço?
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={deleteServicesDatabase} >Excluir</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
  }
   
  export default DeleteServices;