import AddProductToBudget from "@/app/components/AddProductToBudget/addProduct";
import Header from "@/app/components/Header/header";
import { Separator } from "@/components/ui/separator";
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
    
    const getProducts = await db.products.findMany()

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

            return(
                <div key={prod.id} className="flex justify-between gap-x-2 text-black px-4">
                    <span className="text-black">{prod.quantity}x</span>
                    <span className="text-black">{prod.product.product}</span>
                    <span className="text-black">R$ {Number(prod.product.value).toFixed(2)}</span>
                    <span className="text-black">R$ {prod.subTotal.toFixed(2)}</span>
                </div>
            )
        })

        const totalValue = getPrepareQuote.reduce((a,b)=> Number(a) + Number(b.subTotal) , 0)
        

    return ( 
        <main className="w-screen h-screen flex items-center justify-center flex-col">
            <Header
                pageName="Orcamento"            
            />
            <section className="w-full h-[10%] flex items-center justify-center">
                <AddProductToBudget
                    product={getProducts}
                    quoteID={getClient?.quote[0].id as string}
                />
            </section>
            <section className="w-full h-[70%] flex items-center justify-center mb-8">
                <div className="w-96 h-full bg-white text-black">
                <div className="flex justify-between gap-x-2 text-black px-4">
                    <strong>Qtd</strong>
                    <strong>Produto</strong>
                    <strong>valor unit</strong>
                    <strong>subTotal</strong>
                </div>
                <div className="w-full flex justify-center">
                    <Separator orientation="horizontal" className="w-80 w- h-1 bg-black my-4 "/>     
                </div>
                    {!showProducts ? "Nenhum produto foi adicionado ao orcamento" : showProducts}
                </div>
            </section>
            <section className="w-full h-[10%] flex items-center justify-center text-white">
                <div className=" w-96 flex items-center justify-between">
                    <strong>Valor Total: </strong>
                    <span>R$: {totalValue.toFixed(2)}</span>
                </div>
            </section>
        </main>
     );
}
 
export default RegisterService;