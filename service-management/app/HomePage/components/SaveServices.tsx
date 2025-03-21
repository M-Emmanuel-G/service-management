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
import { Clients, Services } from "@prisma/client";
import SaveServicesDatabase from "../Actions/SaveServiceDatabase";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

  interface SaveServiceProps{
    client:Clients[]
    
    services: {
        id: string
        value: number
        description:string
        service: string
    }[]
  }

  interface ServicesProps{
    id: string
    value: number
    description:string
    service: string
  }

const SaveServices = (params:SaveServiceProps) => {

    useEffect(() => {
        if (params.client.length > 0) {
            setClientID(params.client[0].id);
        }
        if (params.services.length > 0) {
            setServiceID(params.services[0].id);
        }
    }, [params.client, params.services]);
    

    const [clientID, setClientID] = useState("")
    const [serviceID, setServiceID] = useState("")
    const [description, setDescription] = useState("")

    const showClients = params.client.map((client:Clients, key:number)=>{
        return (
            <option key={client.id} value={client.id} className="w-80 h-10">{client.nameClient}</option>
        )
    })

    const showServices = params.services.map((service:ServicesProps, key:number)=>{
        return (
            <option key={service.id} value={service.id} className="w-80 h-10">{service.service}</option>
        )
    })
    const saveServicesDatabase = async ()=>{

        const body = {
            clientID,
            description,
            serviceID
        }
        
        const response = await SaveServicesDatabase(body)
        alert(response)
    }

    return ( 
        <AlertDialog>
        <AlertDialogTrigger className="text-white text-xl">Registrar Serviços</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Adicionar novos serviços</AlertDialogTitle>
            <AlertDialogDescription>
            </AlertDialogDescription>
            </AlertDialogHeader>
                <div className="w-full flex flex-col my-4 ">
                    <legend className="font-bold">Clientes:</legend>
                    <select onChange={(ev)=>{setClientID(ev.target.value)}} value={clientID} className="w-80 text-center ">
                        {showClients}
                    </select>
                </div>
                <div className="w-full flex flex-col my-4">
                    <legend className="font-bold">Serviços:</legend>
                    <select onChange={(ev)=>{setServiceID(ev.target.value)}} className="w-80 text-center">
                        {showServices}
                    </select>
               </div>
               <div className="w-full flex flex-col my-4">
                    <legend className="font-bold">Descrição:</legend>
                    <Input value={description} onChange={(ev)=>{setDescription(ev.target.value)}}/>
               </div>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={saveServicesDatabase} >Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
     );
}
 
export default SaveServices;