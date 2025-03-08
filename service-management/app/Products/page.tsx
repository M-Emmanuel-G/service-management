import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import SaveProducts from "./_Components/saveProducts";
import { Products } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import UpdateClient from "./_Components/updateClient";
import DeleteClient from "./_Components/deleteClient";
import { Separator } from "@/components/ui/separator";

const ProductsPage = async () => {

    const getProducts = await db.products.findMany()

    const showProducts = getProducts.map((product:Products, key:number)=>{
        return(
                <Card key={product.id} className="w-96 h-32 my-2 p-0 bg-white rounded-xl">
                    <CardContent className="w-full h-full flex p-0">
                        <div className="w-4/6 h-full flex flex-col items-center justify-center gap-y-4">
                            <CardTitle>{product.product}</CardTitle>
                            <CardDescription>R${Number(product.value)}</CardDescription>
                        </div>
                        <Separator className="w-1 rounded-xl h-full bg-black" orientation="vertical"/>
                        <div className="w-2/6 h-full flex flex-col items-center justify-center">
                            <div className="w-full h-1/2 flex items-center justify-center">
                                <UpdateClient
                                    id={product.id}
                                    product={product.product}
                                    value={Number(product.value)}
                                />
                            </div>
                            <div className="w-full h-1/2 flex items-center justify-center">
                                <DeleteClient
                                    id={product.id}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
        )
    })

    return ( 
        <main className="w-screen h-screen flex justify-center items-center flex-col">
            <Header
                pageName="Produtos"
            />
            <section className="w-full h-[10%] flex items-center justify-center text-white text-xl">
                <SaveProducts/>
            </section>
            <section className="w-full h-[80%] flex items-center flex-col overflow-y-auto">
                {showProducts}
            </section>
        </main>
     );
}
 
export default ProductsPage;