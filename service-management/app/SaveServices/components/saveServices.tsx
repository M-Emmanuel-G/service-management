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
import { Clients, Services } from "@prisma/client";
import { Plus } from "lucide-react";
import { useState } from "react";
import SaveServiceDatabase from "../Actions/SaveServicesDatabase";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
  
interface SaveServicesProps{
 service:Services[]
 clients:Clients[]
}



const ServicesSave = (params:SaveServicesProps) => {

      const [clientId, setClientId] = useState<string>("")
      const [serviceId, setServiceId] = useState<string>("")
      const [description, setDescription] = useState<string>("")

    const showClients = params.clients.map((client:Clients, key:number)=>{
        return ( <option onClick={()=>{setClientId(client.id)}} className="text-white bg-transparent" key={client.id}>{client.nameClient}</option>)
    })

    const showServices = params.service.map((service:Services, key:number)=>{
        return ( <option onClick={()=>{setServiceId(service.id)}} className="text-white" key={service.id}>{service.service}</option>)
    })

    const saveServicesDatabase = async(ev:any)=>{
        ev.preventDefault()
        try {

            const body ={
                clientID: clientId,
                serviceID: serviceId,
                description
            }

            const result = await SaveServiceDatabase(body)
            alert(result)
        } catch (error:any) {
            alert(error.message)
        }
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger className="absolute bottom-8 right-8">
                <Plus width={40} height={40} className="text-[#60FF6B]"/>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black-0.5 border-0">    
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white text-2xl">Adicionar serviços</AlertDialogTitle>
                </AlertDialogHeader>
                <form  onSubmit={saveServicesDatabase}>
                    <div>
                        <select className="w-full h-12 flex bg-transparent text-white my-4">
                            {showClients}
                        </select>
                    </div>
                    <div>
                        <select className="w-full h-12 flex bg-transparent text-white my-4">
                            {showServices}
                        </select>
                    </div>
                    <div>
                        <Input
                            placeholder="Descricao..."
                            className="bg-transparent text-white my-4 border-0"
                            onChange={(ev)=>{setDescription(ev.target.value)}}
                            value={description}
                        />
                    </div>
                    <div className="flex flex-col ">
                        <Button className="bg-[#60FF6B] text-black text-xl my-4 hover:bg-[#60FF6B]">Registrar</Button>
                        <AlertDialogCancel className="text-xl bg-red-500 border-0 my-4 hover:bg-red-500">Voltar</AlertDialogCancel>
                    </div>
                </form>
            </AlertDialogContent>
        </AlertDialog>

     );
  }
   
  export default ServicesSave;