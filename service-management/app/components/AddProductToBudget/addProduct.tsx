"use client"

import AddProductsToBudgetDatabase from "@/app/Actions/AddProductToBudgetDatabase";
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
import { db } from "@/lib/prisma";
import { Products } from "@prisma/client";
import { useState } from "react";

  interface AddProductProps{
    product:Products[]
    quoteID:string
  }

const AddProductToBudget = (params:AddProductProps) => {

    const [productID, setProductID] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);

    const saveProductsDatabase = async ()=>{

        const body = {
            productID,
            quoteID: params.quoteID,
            quantity,
        }

        const response = await AddProductsToBudgetDatabase(body)
        alert(response)
    }

    
    const showProducts = params.product.map((prod:Products, key:number)=>{
        return (
            <option className="w-40" key={prod.id} value={prod.id}>{prod.product}</option>
        )
    })
    return ( 
        <AlertDialog>
        <AlertDialogTrigger className="text-white text-xl">Adicionar Produto</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Adicionar Produto</AlertDialogTitle>
            <AlertDialogDescription>
            </AlertDialogDescription>
            </AlertDialogHeader>
            <section>
                <div className="my-4 flex items-center justify-between">
                    <strong>Produtos:</strong>
                    <select className="w-40 text-center bg-transparent" onChange={(ev)=>{setProductID(ev.target.value)}}>
                        {showProducts}
                    </select>
                </div>
                <div className="my-4 flex items-center justify-between">
                    <strong className="font-bold">Quantidade:</strong>
                    <Input className="w-20 text-center" type="number" value={quantity} onChange={(ev)=>{setQuantity(Number(ev.target.value))}}/>
                </div>
            </section>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={saveProductsDatabase}>Salvar</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>

    );
}
 
export default AddProductToBudget;