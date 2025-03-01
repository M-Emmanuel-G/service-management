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
import { Input } from "@/components/ui/input";
import {  useState } from "react";
import { Pencil } from "lucide-react";
import UpdateServiceDatabase from "../Actions/UpdateServicesDatabase";

interface updateServicesProps{
    id:string
    description:string,
    service:string,
    value:number
}

  
  const UpdateServices = (params:updateServicesProps) => {

    const [service, setService] = useState<string>(params.service)
    const [description, setDescription] = useState(params.description)
    const [value, setValue] = useState<number>(params.value)

   

    const updateService = async (ev:any)=>{

        ev.preventDefault()

        const body = {
            value,
            description,
            service,
            id:params.id
        }

        const response = await UpdateServiceDatabase(body)
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild className="relative top-3">
                <Pencil/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Atualizando dados do cliente!</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <form>
                    <div className="my-2 py-2">
                        <legend>Serviço</legend>
                        <Input value={service} onChange={(ev)=>{setService(ev.target.value)}}/>
                    </div>
                    <div className="my-2 py-2">
                        <legend>Descrição</legend>
                        <Input value={description} onChange={(ev)=>{setDescription(ev.target.value)}}/>
                    </div>
                    <div className="my-2 py-2">
                        <legend>Valor do serviço</legend>
                        <Input value={value} onChange={(ev)=>{setValue(Number(ev.target.value))}}/>
                    </div>
                </form>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={updateService} >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
  }
   
  export default UpdateServices;