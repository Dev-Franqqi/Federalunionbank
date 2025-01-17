'use client'
import { FiRefreshCcw } from "react-icons/fi";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { MdPersonAddAlt1 } from "react-icons/md";
export default function Accountcomp(){
    return(
        <section className="flex flex-wrap gap-y-4 justify-between gap-x-2">

            <div className="w-[47%] flex flex-col justify-between py-8 px-6  bg-white rounded-xl h-[9rem]">
                <FiRefreshCcw className="text-xl" />
                <p className="text-left font-medium text-sm w-2/5 ">Transaction History</p>

            </div>
            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <LiaEnvelopeOpenTextSolid className="text-2xl" />
                <p className="text-left font-medium text-sm w-2/5"> Generate Statement</p>

            </div>
        
            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <LiaEnvelopeOpenTextSolid className="text-2xl"/>
                <p className="text-left font-medium text-sm w-2/5"> Signed Statement</p>

            </div>

            <div className="w-[47%] flex flex-col justify-between py-8 px-6 bg-white rounded-xl h-[9rem]">
                <MdPersonAddAlt1 className="text-2xl" />
                <p className="text-left font-medium text-sm w-2/5">Beneficiaries</p>

            </div>
        
        
        </section>
    )
}