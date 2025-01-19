'use client'
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp"
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Beneficiaries(){



    return(
        <>
        <Dashboardnavcomp />

            <div className="flex gap-x-2 items-center pt-6 py-3 px-6">
                <FaAngleLeft />

            <p className="text-sm font-semibold">Back</p>
            </div>
        <main className="px-6">
            <h1 className="text-xl font-bold">Beneficiatries</h1>

            <div>
            <TabSwitcher />

            </div>
        </main>
        
        </>
    )
}




const TabSwitcher = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Account");

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
            activeTab === "Account" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Account")}
        >
          Transfer
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Transfers" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Transfers")}
        >
          Transfers
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Bill Payments" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Bill Payments")}
        >
          Bill Payments
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Lifestyle" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Lifestyle")}
        >
          Lifestyle
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5">
        {activeTab === "Account" && <p>Transfer</p>}
        {activeTab === "Transfers" && <p>FCY</p>}
        
        {activeTab === "Lifestyle" && <p>Bill payments</p>}
      </div>
    </section>
  );
};


