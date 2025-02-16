"use client"

import { GenerateDate } from "@/app/Services/GenerateDate";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import { Clients, Status } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import RemoveService from "./Components/removeService";
import UpdateStatus from "@/app/SaveServices/components/upateStatus";

interface getInfoServicesProps{
    client:Clients | null
    description:string
    status:Status
    id:string
    registrationDate: string
    startDate: string
    deliveryDate: string 
}

interface ColorProps{
    response:string
    color:string
}
  

const GetInfoServices = (params:getInfoServicesProps) => {

    const [color, setColor] = useState<ColorProps>({
        color:"",
        response:""
    })

    useEffect(()=>{
        if(params.deliveryDate === "Indisponivel") setColor({color:"text-black", response:""})
        const compare = GenerateDate.dateDelay(params.deliveryDate)
        if(compare === false ) setColor({color:"text-green-400", response:"Dentro do prazo"})
        if(compare === true ) setColor({color:"text-red-400", response:"Em atraso"})
        
    },[])

    return ( 
        <Dialog>
            <DialogTrigger>
                <ChevronRight width={40} height={40}/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-2xl my-4">Informações do Serviço</DialogTitle>
                <div className="w-full flex justify-center">
                    <strong className={`${color.color} text-xl`}>{color.response} </strong>
                </div>
                <div className="w-full flex justify-center">
                    <Separator className=" w-11/12 h-[1px] bg-black rounded-3xl my-2"/>
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Cliente: </strong>
                    {params.client?.nameClient}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Status: </strong>
                    {params.status}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Detalhes: </strong>
                    {params.description}
                </div>
                <div className="w-full flex justify-center">
                    <Separator className=" w-11/12 h-[1px] bg-black rounded-3xl my-2"/>
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Registrado em: </strong>
                    {params.registrationDate}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Inicio previsto: </strong>
                    {params.startDate}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Data atual: </strong>
                    {GenerateDate.dateNow()}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Entrega: </strong>
                    {params.deliveryDate}
                </div>
                <div className="w-full flex justify-center">
                    <Separator className=" w-11/12 h-[1px] bg-black rounded-3xl my-2"/>
                </div>
                <div className="w-full flex justify-center flex-col items-center">
                    <UpdateStatus
                        id={params.id}
                        status={params.status}
                    />
                    <RemoveService
                        id={params.id}
                    />
                </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>

     );
}
 
export default GetInfoServices;