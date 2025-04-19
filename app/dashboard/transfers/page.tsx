'use client'
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from 'react-icons/ai';
import {FaAngleLeft} from 'react-icons/fa'
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Label } from "@radix-ui/react-dropdown-menu";
import { db } from "@/app/mycomps/firebase";
import { FormEvent } from "react";
import {doc, updateDoc } from "firebase/firestore";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
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
  const [transferUser,setTransferUser] = useState<any>()
  const [address,setAddress] = useState('')
  const [accountNumber,setAccountNumber] = useState<string>('')
  const [amount ,setAmount] = useState<string>('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const router = useRouter() 
  const userAmount = Cookies.get('amount')
  const email = JSON.parse(Cookies.get('User') || '{}').email
  const doTransaction = ()=>{
    console.log('doing transaction')
    if(typeof(userAmount) === 'string'){
      const amountNum = parseInt(userAmount)
      const amountNum2 = parseInt(amount)
      console.log(amountNum,amountNum2)
      if(amountNum < amountNum2){
        setError('Insufficient funds')
        return
      }
      else{
        updateAmountByEmail(email,amountNum - amountNum2)
      }
    }

  }
  useEffect(()=>{
    console.log(typeof(userAmount))
    const userCookie = Cookies.get('User')
   
    if(!user){
      if(userCookie){
        setUser(JSON.parse(userCookie))
        console.log(user)
      
      }

      else{
        router.push('/login')
      }


    }
   

  },[userAmount])

  const updateAmountByEmail = async (email: string, newAmount: number) => {
    try {
      const usersRef = collection(db, "UserInfo") // collection name
      const q = query(usersRef, where("email", "==", email))
      console.log("Searching for user with email:", email)
  
      const querySnapshot = await getDocs(q)
  
      if (querySnapshot.empty) {
        console.log(" No user found with that email.")
        return
      }
  
      querySnapshot.forEach(async (document) => {
        const userRef = doc(db, "UserInfo", document.id) // correct: using the actual doc ID
        await updateDoc(userRef, {
          amount: newAmount
        })
        console.log(`Amount updated for ${email}`)
      })
      Cookies.set('transaction',JSON.stringify({amount:amount,status:'pending',accountNumber:transferUser,name:`${transferUser?.firstname} ${transferUser?.lastname}` }))
      setSuccess(' Transaction status: Pending')
    } catch (error) {
      console.error("Error updating amount by email:", error)
    }
  }
  
  const findAccountByNumber = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(accountNumber)
    setError('')
    setSuccess('')

    if(!accountNumber || !amount){
      throw new Error('add details')
      setError('Please fill in all fields')
    }
      console.log(accountNumber)
    try {

      const q = query(
        collection(db, "UserInfo"), // 🔁 replace 'accounts' with your collection name
        where("accountNumber", "==", accountNumber)
      );
      console.log('found')
  
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        console.log('none found')
        setError('Account not found')
        return null; // no matching account found
      }
  
      // assuming only one document matches
      const doc = querySnapshot.docs[0];
      console.log('found again ')
      setTransferUser(doc.data())
      console.log(transferUser)
      // setTransferUser( {
      //   id: doc.id,
      //   ...doc.data()
      // });
      // console.log("Account found:", transferUser);
    } catch (error) {
      console.error("Error finding account:", error);
      throw error;
    }
  };

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
    <SelectItem value="FCbank">America Federal Union Bank</SelectItem>
    
  </SelectContent>
</Select>



            </div>
            <div className="bg-white h-68 mt-8 p-4">
              <form onSubmit={findAccountByNumber} className="mt-6">
             <div className="mb-4">
             <label className="text-xs" htmlFor="account">Account Number:</label>
             <Input value={accountNumber} onChange={(e)=>setAccountNumber(e.target.value)} className="" />
             </div>
             <div className="mb-4">
              <label className="text-xs" htmlFor="amount">Amount:</label>
                <Input value={amount }onChange={(e)=>setAmount(e.target.value)} className="" />
             </div>
             <div className="mb-4">
              <label className="text-xs" htmlFor="amount">Address:</label>
                <Input value={address} onChange={(e)=>setAddress(e.target.value)} className="" />
             </div>
             {/* <Button type='submit'>Check Details</Button> */}
             <Dialog>
  <DialogTrigger><Button className="w-full md:w-3/5 md:block md:mx-auto bg-orange-500 text-white" type='submit'>Check Details</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle >Details</DialogTitle>
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-orange-500 border rounded-md p-2">{success}</p>}
      <DialogDescription>
        <p className='mb-2 mt-10'>Name: <span className="font-semibold text-black ">{transferUser?.firstname} {transferUser?.lastname}</span></p>
        <p className="mb-2">Account Number: <span className="font-semibold text-black ">{transferUser?.accountNumber}</span></p>
        <p className="mb-2">Bank: <span className="font-semibold text-black ">America Federal Union Bank</span> </p>
        <p className='mb-2'>Amount: <span className="font-semibold text-black ">${amount}</span></p>
        <p className='mb-2'>Address: <span className='font-semibold text-black '>{address}</span> </p>

        <Button onClick={()=>doTransaction()} className="w-full bg-orange-500 text-white mt-6">Confirm</Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

             {/* <Dialog>
      <DialogTrigger asChild>
             <Button onClick={()=>findAccountByNumber} className="font-semibold text-sm w-full bg-orange-600 text-white">Check Details</Button>

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
    </Dialog> */}
              </form>

</div>


         </main>  </>
}