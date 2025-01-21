'use client'
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from 'react-icons/ai';
import {FaAngleLeft} from 'react-icons/fa'
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import EmptyBeneficiary from '../../../public/EmptyBeneficiary.png'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp";
import useUser from "@/app/mycomps/hooks/useUser";
import { useRouter } from "next/navigation";

export default function Transfers(){
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


  
 <Dashboardnavcomp  />
   <div onClick={()=>router.push('/dashboard')} className=" cursor-pointer flex gap-x-2 items-center pt-6 py-3 px-4" >
                 <FaAngleLeft />
 
             <p className="text-sm font-semibold text-orange-600">Back</p>
             </div>
         <main className="px-4">
             <h1 className="text-xl font-bold">Transfers</h1>
 
             <div className="bg-white ">
             <section className="p-4">
     <div className="relative w-full">
 
      <Alert className="flex items-center py-3 mt-4">
  
  <AlertDescription className='text-sm mt-2'>
  {`Premier Savings ${user.accountNumber} (regular)`}
  </AlertDescription>
</Alert>
    </div>
    <Alert className="flex items-center py-3 mt-4">
  <InfoIcon className="h-4 w-4 text-lg" />
  <AlertDescription className='text-xs mt-2'>
  Dear Customer, a token is required to complete this transaction. Don&apos;t have a token? Please call our Contact Center 
  </AlertDescription>
</Alert>

     
     
    </section>
 
             </div>
            <div className="bg-white py-4 mt-4 px-4">
                <div className="flex justify-between">

                <p className="text-xs">Daily Transaction Limit</p>
                <p className="text-xs font-semibold text-orange-600">$10,000</p>
                </div>
                <Select>
  <SelectTrigger className="w-full mt-4">
    <SelectValue placeholder="Select Bank" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="none">No Options Available Now</SelectItem>
    
  </SelectContent>
</Select>

            </div>
         </main>
      


  
  
  </>
}