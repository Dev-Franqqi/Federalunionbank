'use client'

import { TfiReceipt } from "react-icons/tfi"
import { usePathname } from 'next/navigation'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect,useState } from "react";
import Cookies from "js-cookie";

import { signOut } from "firebase/auth";
import {auth} from "../mycomps/firebase";
import Dashboardnavcomp from "../mycomps/Dashboardnavcomp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import TabSwitcher from "../mycomps/TabsSwitcher";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import useUser from "../mycomps/hooks/useUser";
import useOpen from "../mycomps/hooks/useOpen";
import Dashboarddesktop from "../mycomps/Dashboarddesktop";



export default function Dashboard(){
  const {user,setUser} = useUser()
  const {isOpen,setIsOpen} =useOpen()
  const pathname = usePathname()
  const router = useRouter() 
 
  useEffect(()=>{
    console.log(pathname,typeof(pathname))
    const userCookie = Cookies.get('User')
    if(userCookie){
      setUser(JSON.parse(userCookie))
      console.log(user)
    }
    else{
      router.push('/login')
    }

  },[pathname])

  return<>
<div className="md:flex">
<Dashboarddesktop />


  
<div className="md:w-4/5 ">
  <div className="block md:flex md:justify-between md:items-center">

  <h1 className="font-semibold">Hello {user.firstname}</h1>
<Dashboardnavcomp />
  </div>


  <main onClick={()=>setIsOpen(false)} className="px-4 mt-6">
    <div className="md:flex">
    <div className=" bg-orange-500 w-full h-[16rem] rounded-xl text-white px-3 py-5 relative md:w-2/5">

      <div className="font-medium text-sm">

      <p>Regular</p>
      <p className='text-xs'>{user?user.accountNumber:"N/A"}</p>
      </div>

      <div className="w-full h-fit px-2 py-2 mt-4 text-sm bg-black bg-opacity-40 rounded-2xl flex justify-between">
        <p className="font-medium">Premier Savings</p>
        <DropdownMenu>
  <DropdownMenuTrigger><IoIosArrowDropdown className="text-lg font-medium"/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      </div>
      <p className="text-lg mt-2 font-bold tracking-tighter "><span className="font-medium w-1/4 ">$</span>{user? `${user.amount}`:'N/A'}</p>

      <div className="flex gap-x-4 mx-auto w-fit">
        <div onClick={()=>router.push('/dashboard')}>
        <div className="w-[3rem] h-[3rem] bg-white rounded-2xl flex flex-col justify-center">
        <TfiReceipt className="text-black text-center text-lg mx-auto" />
          
        </div>
        <p className='text-white text-xs font-medium'>Pay bills</p>
        </div>


      <div onClick={()=>router.push('dashboard/transfers')}>

        <div className="w-[3rem] h-[3rem] bg-white rounded-2xl flex flex-col justify-center">
        <FaRegArrowAltCircleUp className="text-black text-center text-2xl mx-auto" />
      </div>
        <p className='text-white text-xs font-medium'>Transfers</p>
        </div>

      </div>


    </div>

    <div className="mt-8 border rounded-lg px-3 py-5 md:w-full md:ml-4">
      <p className="font-medium">Recent Transactions</p>
      <div className="w-full h-[8rem]">
        <Skeleton className="w-full h-[6rem] mt-4"/>
      </div>

    </div>
    </div>
  </main>
  <TabSwitcher />
  </div>

  
</div>
  
  </>
}