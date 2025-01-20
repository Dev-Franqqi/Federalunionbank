'use client'
import { useState } from "react";
import Accountcomp from "./Accountcomp";
import Transfercomp from "./Transfercomp";
import Billscomp from './Billscomp'
import Lifestylecomp from './Lifestylecomp'
const TabSwitcher = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Account");

  // Function to handle tab changes
  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="px-3 py-5">
      {/* Tabs */}
      <div className="w-full py-3 px-2 flex justify-between ">
        <div
          className={`text-xs cursor-pointer py-3 rounded-xl text-center font-medium w-1/4 ${
            activeTab === "Account" ? "bg-orange-100 text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Account")}
        >
          Account
        </div>
        <div
          className={`text-xs cursor-pointer py-3 rounded-xl text-center font-medium w-1/4 ${
            activeTab === "Transfers" ? "bg-orange-100 text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Transfers")}
        >
          Transfers
        </div>
        <div
          className={`text-xs cursor-pointer py-3 rounded-xl text-center font-medium w-1/4 ${
            activeTab === "Bill Payments" ? "bg-orange-100 text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Bill Payments")}
        >
          Bill Payments
        </div>
        <div
          className={`text-xs cursor-pointer py-3 rounded-xl text-center font-medium w-1/4 ${
            activeTab === "Lifestyle" ? "bg-orange-100 text-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Lifestyle")}
        >
          Lifestyle
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5">
        {activeTab === "Account" && <Accountcomp />}
        {activeTab === "Transfers" && <Transfercomp />}
        {activeTab === "Bill Payments" && <Billscomp />}
        {activeTab === "Lifestyle" && <Lifestylecomp />}
      </div>
    </section>
  );
};

export default TabSwitcher;
