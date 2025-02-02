import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import GetInfoServices from "../GetInfoServices/getInfoServices";
import { Clients } from "@prisma/client";

  
interface ServiceCardProps{
    client:Clients| null
    description:string
    status:string
    id:string
    startDate:string
    deliveryDate: string
    registrationDate: string
}

const LastServiceCard = (params:ServiceCardProps) => {
    return ( 
        <Card className=" w-full bg-stone-300 flex justify-between items-center my-4">
            <CardHeader className="w-5/6">
                <CardTitle>{params.client?.nameClient}</CardTitle>
                <CardDescription><strong className="text-black">Detalhes:</strong> {params.description}</CardDescription>
                <CardDescription><strong className="text-black">Status: </strong>{params.status}</CardDescription>
            </CardHeader>
            <CardContent className="w-1/6 h-10 flex justify-end ">
                <GetInfoServices
                    client={params.client}
                    description={params.description}
                    id={params.id}
                    status={params.status}
                    deliveryDate={params.deliveryDate}
                    registrationDate={params.registrationDate}
                    startDate={params.startDate}
                />
            </CardContent>
        </Card>

     );
}
 
export default LastServiceCard;