"use client"

import { Clients, Services } from "@prisma/client";

interface InputSave{
    client:Clients
}


const InputSaveClients = (params:InputSave) => {
    return ( 
        <option className="w-80 h-10">{params.client.nameClient}</option>
    );
}
 
export default InputSaveClients;