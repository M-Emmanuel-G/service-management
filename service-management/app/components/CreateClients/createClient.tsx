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
import { TypePerson } from "@prisma/client";
import { useState } from "react";
import CreateClientDatabase from "./Actions/createClientDatabase";

  
  const CreateClient = () => {

    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [cnpj, setCnpj] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [typePerson, setTypePerson] = useState<string>("")

    const verifyTypePerson = ()=> {
        if(typePerson === "FISICA"){
            return (
                <div className="my-2 py-2">
                    <legend>CPF</legend>
                    <Input maxLength={11} value={cpf} onChange={(ev)=>{setCpf(ev.target.value)}}/>
                </div>
            ) 
            
        }
        else if(typePerson === "JURIDICA"){
            return(
                <div className="my-2 py-2">
                    <legend>CNPJ</legend>
                    <Input maxLength={11} value={cnpj} onChange={(ev)=>{setCnpj(ev.target.value)}}/>
                </div>
            )
        }
    }

    const createClientDatabase = async (ev:any)=>{

        ev.preventDefault()

        const body = {
            address,
            cnpj,
            cpf,
            nameClient: name,
            typePerson

        }

        const response = await CreateClientDatabase(body)
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
                    <div className="w-full flex justify-evenly">
                        <label id="fisica">
                            <input className="mx-2" type="radio" name="typePerson" value={typePerson} onChange={(ev)=>{setTypePerson(TypePerson.FISICA)}} />Pessoa Fisica
                        </label>
                        <label id="juridica">
                            <input className="mx-2" type="radio" name="typePerson" value={typePerson} onChange={(ev)=>{setTypePerson(TypePerson.JURIDICA)}}/>Pessoa Juridica
                        </label>
                    </div>
                    <div className="my-2 py-2">
                        <legend>Nome Cliente:</legend>
                        <Input value={name} onChange={(ev)=>{setName(ev.target.value)}}/>
                    </div>
                    <div className="my-2 py-2">
                        <legend>Endereço:</legend>
                        <Input value={address} onChange={(ev)=>{setAddress(ev.target.value)}}/>
                    </div>
                    {verifyTypePerson()}
                </form>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={createClientDatabase}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
  }
   
  export default CreateClient;