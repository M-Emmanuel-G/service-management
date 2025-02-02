import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ChevronRight } from "lucide-react";
  
interface ServiceCardProps{
    client:string
    description:string
    status?:string
    id:string
}

const LastServiceCard = (params:ServiceCardProps) => {
    return ( 
        <Card className=" w-full bg-stone-300 flex justify-between items-center my-4">
            <CardHeader className="w-5/6">
                <CardTitle>{params.client}</CardTitle>
                <CardDescription>{params.description}</CardDescription>
            </CardHeader>
            <CardContent className="w-1/6 h-10 flex justify-end ">
                <ChevronRight width={40} height={40}/>
            </CardContent>
        </Card>

     );
}
 
export default LastServiceCard;