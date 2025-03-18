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
import { Clients, Products } from "@prisma/client";
import { useState } from "react";
  

  interface BudgetProps{
    clients: Clients[]
    products: Products[]
  }

  
  const CreateBudget = (params:BudgetProps) => {

    const [clientID, setClientID] = useState<string>("");

    const showClients = params.clients.map((client:Clients, key:number)=>{
        return ( <option key={client.id} value={client.id}>{client.nameClient}</option>)
    })

    return ( 
        <AlertDialog>
        <AlertDialogTrigger className="text-white text-xl mx-4 my-2">Criar orçamento</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Orcamento</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
            </AlertDialogHeader>
            <section>
                <select onChange={(ev)=>{setClientID(ev.target.value)}}>
                    {showClients}
                </select>
            </section>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
     );
}
 
export default CreateBudget;