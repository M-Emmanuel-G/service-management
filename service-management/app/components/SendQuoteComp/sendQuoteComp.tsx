import SendQuoteDatabase from "@/app/Actions/SendQuoteDatabase"
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
import { Input } from "@/components/ui/input"
import { EnumQuote } from "@prisma/client"
import { useState } from "react"
  
  interface SendQuoteProps{
    id:string
    client:string | undefined
    service:string
    sendQuote:EnumQuote
  }

  interface SendQuoteFormProps{
    itemOne:string,
    itemTwo:string
    itemThree:string
    itemFour:string
    itemFive:string
    itemSix:string
    itemSeven:string
    itemEight:string
    itemNine:string
    itemTen:string
    registerID:string
}

const SendQuoteComponent = (params:SendQuoteProps) => {

    const [itemOne, setItemOne] = useState<string>("")
    const [itemTwo, setItemTwo] = useState<string>("")
    const [itemThree, setItemThree] = useState<string>("")
    const [itemFour, setItemFour] = useState<string>("")
    const [itemFive, setItemFive] = useState<string>("")
    const [itemSix, setItemSix] = useState<string>("")
    const [itemSeven, setItemSeven] = useState<string>("")
    const [itemEight, setItemEight] = useState<string>("")
    const [itemNine, setItemNine] = useState<string>("")
    const [itemTen, setItemTen] = useState<string>("")

    const sendQuoteDatabase = async ()=>{

      const body:SendQuoteFormProps = {
                itemOne,
                itemTwo,
                itemThree,
                itemFour,
                itemFive,
                itemSix,
                itemSeven,
                itemEight,
                itemNine,
                itemTen,
                registerID: params.id
      }

      const result = await SendQuoteDatabase(body)
      alert(result)
    }

    return ( 
        <AlertDialog>
            <AlertDialogTrigger>Enviar Orcamento</AlertDialogTrigger>
            <AlertDialogContent className="bg-black-0.5 border-0 text-white overflow-auto">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl my-2 font-bold">Enviar Orçamento</AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col text-white">
                
                    <strong className="my-4">Cliente:</strong>
                    <strong className="my-4">{params.client}</strong>

                </AlertDialogDescription>
                </AlertDialogHeader>
                  <form>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 01</strong>
                      <Input value={itemOne} onChange={(ev)=>{setItemOne(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 02</strong>
                      <Input value={itemTwo} onChange={(ev)=>{setItemTwo(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 03</strong>
                      <Input value={itemThree} onChange={(ev)=>{setItemThree(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 04</strong>
                      <Input value={itemFour} onChange={(ev)=>{setItemFour(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 05</strong>
                      <Input value={itemFive} onChange={(ev)=>{setItemFive(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 06</strong>
                      <Input value={itemSix} onChange={(ev)=>{setItemSix(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 07</strong>
                      <Input value={itemSeven} onChange={(ev)=>{setItemSeven(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 08</strong>
                      <Input value={itemEight} onChange={(ev)=>{setItemEight(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 09</strong>
                      <Input value={itemNine} onChange={(ev)=>{setItemNine(ev.target.value)}} className="w-80"/>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 10</strong>
                      <Input value={itemTen} onChange={(ev)=>{setItemTen(ev.target.value)}} className="w-80"/>
                    </div>
                  </form>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-700 border-0 hover:bg-red-700 hover:text-white text-xl">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={sendQuoteDatabase} className="bg-sky-400 border-0 hover:bg-sky-400 hover:text-white text-xl" >Enviar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default SendQuoteComponent