'use client'
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from 'react-icons/ai';
import {FaAngleLeft} from 'react-icons/fa'
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import Dashboarddesktop from "@/app/mycomps/Dashboarddesktop";
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import EmptyBeneficiary from '../../../public/EmptyBeneficiary.png'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp";
import useUser from "@/app/mycomps/hooks/useUser";
import { useRouter } from "next/navigation";
export default function Dashboard(){
  const {user,setUser} = useUser()
  const router = useRouter() 

  useEffect(()=>{
    const userCookie = Cookies.get('User')
    if(userCookie){
      setUser(JSON.parse(userCookie))
      console.log(user)
    }
    else{
      router.push('/login')
    }

  },[])

  return<>


<div className="flex">
          <Dashboarddesktop />
        <div className="md:w-3/5 ">
        <div className="md:flex md:justify-between md:items-center">
          <h1 className="font-semibold hidden md:block ">

          Hello {user.firstname}
          </h1>

        <Dashboardnavcomp />
        </div>
   <div onClick={()=>router.push('/dashboard')} className=" cursor-pointer flex gap-x-2 items-center pt-6 py-3 px-4" >
                 <FaAngleLeft />
 
             <p className="text-sm font-semibold text-orange-600">Back</p>
             </div>
         <main className="px-4">
             <h1 className="text-xl font-bold">Transaction History</h1>
 
             <div className="bg-white ">
             <section className="p-4">
     <div className="relative w-full">
 
      <Alert className="flex items-center py-3 mt-4">
  
  <AlertDescription className='text-base mt-2'>
  {`Premier Savings ${user.accountNumber} (regular)`}
  </AlertDescription>
</Alert>
    </div>
    <Alert className="flex items-center py-3 mt-4">
  <InfoIcon className="h-4 w-4 text-lg" />
  <AlertDescription className='text-xs mt-2'>
    Need a receipt? Select a transaction to generate one.
  </AlertDescription>
</Alert>

     
     
    </section>
 
             </div>
             <div className='bg-white p-4 mt-2'>
             <div className="py-8 mt-10">
      <Image src={EmptyBeneficiary} alt='' className="mx-auto " />

     </div>
             </div>
         </main>
         </div>
         </div>
      


  
  
  </>
}