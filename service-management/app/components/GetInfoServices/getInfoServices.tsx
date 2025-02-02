import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Clients } from "@prisma/client";
import { ChevronRight } from "lucide-react";

interface getInfoServicesProps{
    client:Clients | null
    description:string
    status:string
    id:string
    registrationDate: string
    startDate: string
    deliveryDate: string
}
  

const GetInfoServices = (params:getInfoServicesProps) => {
    return ( 
        <Dialog>
            <DialogTrigger>
                <ChevronRight width={40} height={40}/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-2xl my-4">Informações do serviço</DialogTitle>
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
                <div className="w-full flex justify-between">
                    <strong className="text-black">Data de registro: </strong>
                    {params.registrationDate}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Data de inicio: </strong>
                    {params.startDate}
                </div>
                <div className="w-full flex justify-between">
                    <strong className="text-black">Data de entrega: </strong>
                    {params.deliveryDate}
                </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>

     );
}
 
export default GetInfoServices;