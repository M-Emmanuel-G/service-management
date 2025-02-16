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
  
  interface SendQuoteProps{
    id:string
    client:string | undefined
    service:string
  }

const SendQuote = (params:SendQuoteProps) => {
    return ( 
        <AlertDialog>
            <AlertDialogTrigger>Enviar Orcamento</AlertDialogTrigger>
            <AlertDialogContent className="bg-black-0.5 border-0 text-white">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl my-2">Enviar Orçamento</AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col text-white">
                    <div className="w-full flex justify-between">
                    <strong className="my-4">Cliente:</strong>
                    <strong className="my-4">{params.client}</strong>
                    </div>
                    <textarea
                        className="outline-none border-2 border-white rounded-xl text-white p-4 bg-transparent my-2"
                        cols={40}
                        rows={20}
                    />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

     );
}
 
export default SendQuote;