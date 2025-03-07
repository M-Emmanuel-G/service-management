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
import DeleteClientDatabase from "../Actions/DeleteClientBadatabase";
  
  interface DeleteClientProps{
    id:string
    nameClient:string
  }

const DeleteClient = (params:DeleteClientProps) => {

    const deleteClientDatabase = async ()=>{
        const response = await DeleteClientDatabase({
            id:params.id
        })
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Trash2 className="mx-4 text-red-400" width={30} height={30}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Deseja realmenet excluir o cliente {params.nameClient}?</AlertDialogTitle>
                <AlertDialogDescription>
                    Esta ação não podera ser desfeita no futuro.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-red-400 hover:bg-red-400" onClick={deleteClientDatabase}>Excluir</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default DeleteClient;