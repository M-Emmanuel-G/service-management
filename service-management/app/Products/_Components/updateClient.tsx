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
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import UpdateClientDatabase from "../Actions/UpdateClientDatabase";
  
interface UpdateClientProps{
    id:string,
    product:string
    value:number
}

const UpdateClient = (params:UpdateClientProps) => {

    const [product, setProduct] = useState<string>(params.product);
    const [value, setValue] = useState<number>(params.value);

    const updateClientDatabase = async()=>{
        const body:UpdateClientProps = {
            id:params.id,
            product:params.product,
            value:params.value
        }
        const response = await UpdateClientDatabase(body)
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Pencil width={25} height={25}/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Atualize os dados do cliente</AlertDialogTitle>
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
                    </form>
                </section>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={updateClientDatabase}>Atualizar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default UpdateClient;