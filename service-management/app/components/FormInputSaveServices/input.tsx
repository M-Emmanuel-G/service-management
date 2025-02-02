"use client"

import { Input } from "@/components/ui/input";
import { Clients, Services } from "@prisma/client";

interface InputSave{
    service:Services
}


const InputSaveServices = (params:InputSave) => {
    return ( 
        <option className="w-80 h-10">{params.service.service}</option>
    );
}
 
export default InputSaveServices;