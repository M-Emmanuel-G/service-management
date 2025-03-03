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
import { EnumQuote, Products } from "@prisma/client"
import { useState } from "react"
  
  interface SendQuoteProps{
    id:string
    client:string | undefined
    service:string
    sendQuote:EnumQuote
    quantity:number
    productID:string
    products: Products[]
  }

const SendQuoteComponent = (params:SendQuoteProps) => {

    
    const [quantity, setQuantity] = useState<number>(params.quantity)
    const [products, setProducts] = useState(params.products)
    

    const sendQuoteDatabase = async ()=>{
      
      const body = {
        registerServiceID: params.id,
        quantity:params.quantity,
        productID:params.productID
      }

      const result = await SendQuoteDatabase(body)
      alert(result)
    }

      const showProducts = products.map((product:Products, key:number)=>{
        return(
          <option className="w-80 bg-transparent text-black" key={product.id}>{product.product}</option>
        )
      })

    return ( 
        <AlertDialog>
            <AlertDialogTrigger>Enviar Orcamento</AlertDialogTrigger>
            <AlertDialogContent className="bg-black-0.5 border-0 text-white overflow-auto">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl text-center my-2 font-bold">Enviar Orçamento</AlertDialogTitle>
                <AlertDialogDescription className="flex  text-white">
                
                    <strong className="mx-2 text-xl">Cliente:</strong>
                    <strong className="text-xl">{params.client}</strong>

                </AlertDialogDescription>
                </AlertDialogHeader>
                  <form>
                    <div className="flex justify-between items-center my-3">
                      <strong>Item 01:</strong>
                      <select className="w-80 bg-transparent">
                        {showProducts}
                      </select>
                    </div>
                    <div className="flex justify-between items-center my-3">
                      <strong>Quantidade:</strong>
                      <Input value={quantity} onChange={(ev)=>{setQuantity(Number(ev.target.value))}} className="w-20 text-xl border-0 hover:border-0" type="number"/>
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