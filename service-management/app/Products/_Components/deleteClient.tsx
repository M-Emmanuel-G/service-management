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
import DeleteProductDatabase from "../Actions/deleteProductDatabase";
  
  interface DeleteClientProps{
    id:string
  }

const DeleteClient = (params:DeleteClientProps) => {

    const deleteClientDatabase = async ()=>{
        const response = await DeleteProductDatabase({
            id:params.id
        })
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Trash2 width={30} height={30}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Deseja realmenet excluir o produto?</AlertDialogTitle>
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