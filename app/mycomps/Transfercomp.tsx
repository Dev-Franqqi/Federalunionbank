'use client'
import { BiTransfer } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";

export default function Transfercomp(){
    return(
        <section className="flex flex-wrap gap-y-4 justify-between gap-x-2">

            <div className="w-[47%] flex flex-col justify-between py-8 px-6  bg-white rounded-xl h-[9rem]">
                <BiTransfer className="text-xl" />
                <p className="text-left font-medium text-sm w-2/5 ">Other Banks Transfer</p>

            </div>
            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <BsCurrencyExchange className="text-2xl" />
                <p className="text-left font-medium text-sm w-2/5"> Foreign Currency</p>

            </div>
        
           
        
        
        </section>
    )
}