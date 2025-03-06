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
                <Card key={product.id} className="w-80 h-20 m-4">
                    <CardContent className="w-full h-full flex items-center justify-center">
                        <section className="w-5/6 h-full flex flex-col justify-center gap-y-2 p-0">
                            <CardTitle>{product.product}</CardTitle>
                            <CardDescription>R${Number(product.value)}</CardDescription>
                        </section>
                        <section className="w-1/6 h-full flex flex-col justify-center items-center p-0 mt-4 gap-y-4">
                            <UpdateClient
                                id={product.id}
                                product={product.product}
                                value={Number(product.value)}
                            />
                            <DeleteClient
                                id={product.id}
                            />
                        </section>
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
            <section className="w-full h-[80%] flex items-center flex-col px-4 overflow-y-auto">
                {showProducts}
            </section>
        </main>
     );
}
 
export default ProductsPage;