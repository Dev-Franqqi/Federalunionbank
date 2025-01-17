'use client'
import { Avatar ,AvatarFallback} from "@/components/ui/avatar"
import { FaBell } from "react-icons/fa";
import { TfiReceipt } from "react-icons/tfi"
import { usePathname } from 'next/navigation'
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import { ISignupinput } from "../signup/page";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { PiReceiptFill } from "react-icons/pi";
import Logo from '../../public/AFCU.png'
import {motion} from 'framer-motion'
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import TabSwitcher from "../mycomps/TabsSwitcher";
import { RxHamburgerMenu } from "react-icons/rx";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
export default function Dashboard(){
  const [user,setUser] = useState<ISignupinput>()
  const [isOpen, setIsOpen] = useState(false);
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


  <nav className="flex justify-between items-center p-6">
    <div className="flex gap-x-6 items-center">
      <FaBell className="text-2xl" />
      <Avatar className="bg-black">
      <AvatarFallback className="font-medium tracking-wider">
  {user 
    ? `${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}` 
    : "N/A"}
</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{}</p>
        <p className="text-sm font-medium">{user?`${user.firstname} ${user.lastname}`:"N/A"}</p>
        <p className="text-xs">{user?`${user.email}`:"N/A"}</p>
      </div>
    </div>

    <RxHamburgerMenu onClick={()=>setIsOpen((prev)=>!prev)} className="text-2xl font-medium"/>

  </nav>
  <motion.aside
        className="w-3/5 bg-gray-200 h-screen absolute z-10 top-0 flex flex-col justify-between"
        initial={{ x: "-100%" }} // Start off-screen
        animate={{ x: isOpen ? "0%" : "-100%" }} // Slide in or out
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth animation
      >
        {/* Your aside content */}
        <Image src={Logo} width={100} className="ml-4 mt-4" alt="AFCU" />
        <ul className="h-3/5 flex flex-col justify-between">
          <li className={"flex items-center text-xs gap-x-1 pl-5  font-semibold" + (pathname === "/dashboard" ? "text-orange-600" : "")}>
            <MdHomeFilled className="text-2xl"  />
            Home
          </li>
          <li className="flex items-center text-xs gap-x-1 pl-5  font-semibold">
            <IoPersonAdd className="text-2xl" />
            Beneficiaries
          </li>
          <li className={"flex items-center text-xs gap-x-1 pl-5  font-semibold"}onClick={()=>router.push('/dashboard/transactions')} >
            <PiReceiptFill className="text-2xl" />
            Transactions
          </li>
          <li className="flex items-center text-xs gap-x-1 pl-5  font-semibold">
            <FaGear className="text-2xl" />
            Profile Settings
          </li>
          <li className="flex items-center text-xs gap-x-1 pl-5  font-semibold">
            <IoLogOutSharp className="text-3xl" />
            Logout
          </li>
        </ul>
        <div className="h-1/5"></div>
      </motion.aside>
      

  <main onClick={()=>setIsOpen((prev)=>!prev)} className="px-6 mt-6">
    <div className="bg-orange-500 w-full h-[16rem] rounded-xl text-white p-5 relative">

      <div className="font-medium text-sm">

      <p>Regular</p>
      <p>{user?user.accountNumber:"N/A"}</p>
      </div>

      <div className="w-full h-fit px-4 py-2 mt-4 text-sm bg-black rounded-2xl flex justify-between">
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

      <div className="flex gap-x-2 mx-auto w-fit">
        <div className="w-[3rem] h-[3rem] bg-white rounded-2xl flex flex-col justify-center">
        <TfiReceipt className="text-black text-center text-lg mx-auto" />
        </div>
        <div className="w-[3rem] h-[3rem] bg-white rounded-lg flex flex-col justify-center">
        <FaRegArrowAltCircleUp className="text-black text-center text-2xl mx-auto" />
        </div>
      </div>


    </div>

    <div className="mt-8 border rounded-lg px-5 py-5">
      <p className="font-medium">Recent Transactions</p>
      <div className="w-full h-[8rem]">
        <Skeleton className="w-full h-[6rem] mt-4"/>
      </div>

    </div>
  </main>
  <TabSwitcher />

  
  
  </>
}