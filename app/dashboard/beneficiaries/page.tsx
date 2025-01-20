'use client'
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp"
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from 'react-icons/ai';
import { Button } from "@/components/ui/button";
import EmptyBeneficiary from '../../../public/EmptyBeneficiary.png'
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Beneficiaries(){
  const router = useRouter()


    return(
        <>
        <Dashboardnavcomp />

            <div onClick={()=>router.push('/dashboard')} className=" cursor-pointer flex gap-x-2 items-center pt-6 py-3 px-6" >
                <FaAngleLeft />

            <p className="text-sm font-semibold text-orange-600">Back</p>
            </div>
        <main className="px-6">
            <h1 className="text-xl font-bold">Beneficiatries</h1>

            <div className="bg-white ">
            <TabSwitcher />

            </div>
        </main>
        
        </>
    )
}




const TabSwitcher = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Transfer");

  // Function to handle tab changes
  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="px-5 py-5">
      {/* Tabs */}
      <div className="w-full py-3 px-4 flex justify-between ">
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Transfer" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Transfer")}
        >
          Transfer
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "FCY" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("FCY")}
        >
          FCY
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Bill Payments" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Bill Payments")}
        >
          Bill Payments
        </div>
      
      </div>

      {/* Content Section */}
      <div className="mt-5">
        {activeTab === "Transfer" && <Transfer />}
        {activeTab === "FCY" && <p className="font-medium px-6">Coming Soon!</p>}
        
        {activeTab === "Bill Payments" && <p className="font-medium px-6">Coming Soon!</p>}
      </div>
    </section>
  );

};


const Transfer = ()=>{
  return(
    <section className="p-4">
     <div className="relative w-full">
      <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      <Input
        type="text"
        className="w-full pl-10 pr-4 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
      />
    </div>
    <Button className=" w-full py-6 mt-4 bg-orange-500 text-white font-semibold">Add beneficiary</Button>
     
     <div className="py-8 mt-10">
      <Image src={EmptyBeneficiary} alt='' className="mx-auto " />

     </div>
    </section>
  )
}

