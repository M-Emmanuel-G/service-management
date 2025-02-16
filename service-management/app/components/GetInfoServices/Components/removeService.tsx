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
import RemoveServiceDatabase from "../Actions/removeServiceDatabase";
import { useState } from "react";

interface RemoveServiceProps{
    id:string
}

  const RemoveService = (params:RemoveServiceProps) => {

    const [open, setOpen] = useState(false)

    const removeServiceDatabase = async ()=>{
        const response = await RemoveServiceDatabase({
            id:params.id
        })
        alert(response)
        setOpen(false)
    }

    return ( 
        <AlertDialog  open={open} onOpenChange={setOpen} >
            <AlertDialogTrigger className="text-red-400">
                <strong onClick={()=>{setOpen(true)}}>Remover</strong>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Deseja excluir este serviço?</AlertDialogTitle>
                <AlertDialogDescription className="">
                    Esta ação não poderá ser revertida!
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="text-black font-bold">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={removeServiceDatabase} className="bg-red-400 hover:bg-red-400 text-black font-bold">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
  }
   
  export default RemoveService;