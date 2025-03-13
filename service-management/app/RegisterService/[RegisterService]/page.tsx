import Header from "@/app/components/Header/header";
import { db } from "@/lib/prisma";
import { PrepareQuote, Products } from "@prisma/client";
import { notFound } from "next/navigation";

interface RegisterServiceProps{
    params: Promise<{RegisterService:string}>
}

interface ProductsProps{
    id :string
    quantity:string
    subTotal:string
    products:{
        product:String
        value:number
    }
}

const RegisterService = async ({params}:RegisterServiceProps) => {
    
    const response = await params

    const getService = await db.registerService.findUnique({
        where:{
            id:response.RegisterService
        }
    })

    const getClient = await db.clients.findUnique({
        where:{
            id:getService?.clientID
        },
        include:{
            quote:true
        }
    })

    
    

    if(!getService) return notFound()

        const getPrepareQuote = await db.prepareQuote.findMany({
            where:{
                quoteID: getClient?.quote[0].id
            },
            include:{
                product:true
            }
        })

        

        const showProducts = getPrepareQuote.map((prod:any)=>{

            console.log(prod);
            
            return(
                <div key={prod.id} className="flex gap-x-2">
                    <span className="text-white">{prod.quantity}x</span>
                    <span className="text-white">{prod.product.product}</span>
                    <span className="text-white">R$ {Number(prod.product.value).toFixed(2)}</span>
                    <span className="text-white">R$ {prod.subTotal.toFixed(2)}</span>
                </div>
            )
        })
        

    return ( 
        <main className="w-screen h-screen flex items-center justify-center flex-col">
            <Header
                pageName="Orcamento"            
            />
            <section className="w-full h-[10%] flex items-center justify-center">
                
            </section>
            <section className="w-full h-[80%] flex items-center justify-center">
                <div>
                    {!showProducts ? "Nenhum produto foi adicionado ao orcamento" : showProducts}
                </div>
            </section>
        </main>
     );
}
 
export default RegisterService;