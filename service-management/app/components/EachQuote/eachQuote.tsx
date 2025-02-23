"use client"

import { Services } from "@/app/Services/Services"
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
import { Quote } from "@prisma/client"
  
  interface SendQuoteProps{
    id:string
    quote: Quote | null
  }

const EachQuote =  (params:SendQuoteProps) => {

    return ( 
        <AlertDialog>
            <AlertDialogTrigger>Orcamento Enviado!</AlertDialogTrigger>
            <AlertDialogContent className="bg-black-0.5 border-0 text-white">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl my-2">Orçamento</AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col text-white">
                </AlertDialogDescription>
                <section>
                  <div>
                    <strong>descricao</strong>
                    <span>{params.quote?.itemOne}</span>
                  </div>
                </section>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-700 border-0 hover:bg-red-700 hover:text-white text-xl">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-sky-400 border-0 hover:bg-sky-400 hover:text-white text-xl" >Criar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default EachQuote;