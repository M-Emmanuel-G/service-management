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
import {  useState } from "react";
import CreateServicesDatabase from "../Actions/createServicesDatabase";

  
  const CreateServices = () => {

    const [service, setService] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [value, setValue] = useState<string>("")

   

    const createServicesDatabase = async (ev:any)=>{

        ev.preventDefault()

        const body = {
           value: Number(value),
           description,
           service

        }

        const response = await CreateServicesDatabase(body)
        alert(response)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger className="text-white text-xl">Adicionar</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Adicionar novos clientes</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <form>
                    <div className="my-2 py-2">
                        <legend>Serviço</legend>
                        <Input value={service} onChange={(ev)=>{setService(ev.target.value)}}/>
                    </div>
                    <div className="my-2 py-2">
                        <legend>Descrição</legend>
                        <Input value={description} onChange={(ev)=>{setDescription(ev.target.value)}}/>
                    </div>
                    <div className="my-2 py-2">
                        <legend>Valor do serviço</legend>
                        <Input value={value} onChange={(ev)=>{setValue(ev.target.value)}}/>
                    </div>
                </form>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={createServicesDatabase}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
  }
   
  export default CreateServices;