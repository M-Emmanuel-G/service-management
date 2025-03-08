import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import SaveProducts from "./_Components/saveProducts";
import { Products } from "@prisma/client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import UpdateClient from "./_Components/updateClient";
import DeleteClient from "./_Components/deleteClient";

const ProductsPage = async () => {

    const getProducts = await db.products.findMany()

    const showProducts = getProducts.map((product:Products, key:number)=>{
        return(
                <div key={product.id} className="w-80 h-20 my-2 p-0 bg-white rounded-xl">
                    <div className="w-full h-full flex p-0">
                        <div className="w-5/6 h-full flex flex-col items-center justify-center gap-y-4">
                            <CardTitle>{product.product}</CardTitle>
                            <CardDescription>R${Number(product.value)}</CardDescription>
                        </div>
                        <div className="w-1/6 h-full flex flex-col items-center justify-center gap-y-4">
                            <UpdateClient
                                id={product.id}
                                product={product.product}
                                value={Number(product.value)}
                            />
                            <DeleteClient
                                id={product.id}
                            />
                        </div>
                    </div>
                </div>
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