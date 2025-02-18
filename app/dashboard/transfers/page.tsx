'use client'
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from 'react-icons/ai';
import {FaAngleLeft} from 'react-icons/fa'
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Label } from "@radix-ui/react-dropdown-menu";
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

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
 
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
  
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
  Dear Customer, a transfer key is required to complete this transaction. 
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
    <SelectItem value="FCbank">First Community Bank</SelectItem>
    
  </SelectContent>
</Select>



            </div>
            <div className="bg-white h-56 mt-8 p-4">
              <form className="mt-6">
             <div className="mb-4">
             <label className="text-xs" htmlFor="account">Account Number:</label>
             <Input className="" />
             </div>
             <div className="mb-4">
              <label className="text-xs" htmlFor="amount">Amount:</label>
                <Input className="" />
             </div>
             <Dialog>
      <DialogTrigger asChild>
             <Button className="font-semibold text-sm w-full bg-orange-600 text-white">Send</Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Transfers</DialogTitle>
          <DialogDescription>
            Input passkey to confirm transaction
          </DialogDescription>
        </DialogHeader>
        <div className="w-fit mx-auto">

        <InputOTP className="" maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      
    </InputOTP>
        </div>
        <DialogFooter>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-orange-600 w-full text-white font-semibold" variant="outline">Submit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-red-600">Checking amount missing</AlertDialogTitle>
          <AlertDialogDescription>
          To proceed, you will need to have a checking account, as it is required for transactions and account management. The total cost for this will be $500, which covers all necessary setup and processing. This ensures smooth and secure financial operations for your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-black text-white font-semibold">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
              </form>

</div>


         </main>  </>
}