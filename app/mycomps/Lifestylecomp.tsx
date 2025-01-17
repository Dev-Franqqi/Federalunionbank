'use client'
import { FiRefreshCcw } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { MdPersonAddAlt1 } from "react-icons/md";
export default function Lifestylecomp(){
    return(
        <section className="flex flex-wrap gap-y-4 justify-between gap-x-2">

            <div className="w-[47%] flex flex-col justify-between py-8 px-6  bg-white rounded-xl h-[9rem]">
                <FiRefreshCcw className="text-xl" />
                <p className="text-left font-medium text-sm w-2/5 ">eVoucher (Gift Cards)</p>

            </div>
            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <LiaEnvelopeOpenTextSolid className="text-2xl" />
                <p className="text-left font-medium text-sm w-2/5"> Airtime & Data Top-up</p>

            </div>
        
            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <LiaEnvelopeOpenTextSolid className="text-2xl"/>
                <p className="text-left font-medium text-sm w-2/5"> Internation Airtime</p>

            </div>

            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <MdPersonAddAlt1 className="text-2xl" />
                <p className="text-left font-medium text-sm w-2/5">Scheduled Payment</p>

            </div>
        
        
        </section>
    )
}