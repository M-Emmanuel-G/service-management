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
import { useState } from "react";
import SaveProductsDatabase from "../Actions/saveProductsDatabase";
  

const SaveProducts = () => {

    const [product, setProduct] = useState<string>("");
    const [value, setValue] = useState<number>(0);

    const saveProductsDatabase = async (ev:any)=>{

        ev.preventDefault()

        const body = {
            product,
            value
        }
        const response = await SaveProductsDatabase(body)
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger className="text-center">Registrar Produtos</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle className="text-center text-xl">Cadastre Produtos</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <section>
                    <form>
                        <div>
                            <legend>Nome do Produto:</legend>
                            <Input
                            className="my-2"
                                value={product}
                                onChange={(ev=>{setProduct(ev.target.value)})}
                            />
                        </div>
                        <div>
                            <legend>valor:</legend>
                            <Input
                            className="my-2"
                                type="number"
                                value={value}
                                onChange={(ev=>{setValue(Number(ev.target.value))})}
                            />
                        </div>
                <AlertDialogFooter className="">
                  <AlertDialogCancel className="">Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={saveProductsDatabase} className="">Cadastrar</AlertDialogAction>
                </AlertDialogFooter>
                    </form>
                </section>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default SaveProducts;