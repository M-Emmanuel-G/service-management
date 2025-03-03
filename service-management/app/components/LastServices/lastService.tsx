"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import GetInfoServices from "../GetInfoServices/getInfoServices";
import { Clients, EnumQuote, Products, Quote, Status } from "@prisma/client";
import { useGlobalContext } from "@/app/_Context/GlobalContext";
import { useEffect, useState } from "react";

  
interface ServiceCardProps{
    client:Clients| null
    description:string
    status:Status
    id:string
    startDate:string
    deliveryDate: string
    registrationDate: string
    sendQuote: EnumQuote
    quote: Quote | null
    products: Products[]
}

interface ProductsProps{
    id:string
    product:string
    value: string
    createdAt: string
}

const LastServiceCard = (params:ServiceCardProps) => {

    const {products, setProducts} = useGlobalContext()

    useEffect(()=>{
        if(params.products){
            setProducts(params.products)
        }
        
    },[])
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
                    sendQuote={params.sendQuote}
                    quote={params.quote}
                    products={params.products}
                />
            </CardContent>
        </Card>

     );
}
 
export default LastServiceCard;