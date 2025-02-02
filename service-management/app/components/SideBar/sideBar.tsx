import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link";

    const SideBar = () => {
        return ( 
            <Sheet>
                <SheetTrigger asChild>
                    <Menu width={40} height={40}/>
                </SheetTrigger>
                <SheetContent className=" w-full h-full flex flex-col items-center bg-black-0.5 border-0 text-white">
                    <SheetHeader>
                <SheetTitle className="w-full text-white text-2xl mt-8 mb-4 ">
                    Logotipo/Empresa
                </SheetTitle>
                <SheetDescription className="w-full flex flex-col items-start">
                    <Link
                        href="/"
                        className="w-60 h-20 text-xl flex justify-center items-center text-white my-4"
                        > Novo Servico
                    </Link>
                    <Link
                        href="/"
                        className="w-60 h-20 text-xl flex justify-center items-center text-white my-4"
                        > Clientes
                    </Link>
                    <Link
                        href="/"
                        className="w-60 h-20 text-xl flex justify-center items-center text-white my-4"
                        > Servicos
                    </Link>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>
         );
    }
     
    export default SideBar
    ;
