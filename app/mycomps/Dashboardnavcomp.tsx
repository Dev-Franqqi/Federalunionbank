'use client'
import { Avatar ,AvatarFallback} from "@/components/ui/avatar"
import { FaBell } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { PiReceiptFill } from "react-icons/pi";
import Logo from '../../public/AFCU.png'
import {motion} from 'framer-motion'
import { useRouter,usePathname } from "next/navigation";
import {ISignupinput} from '../signup/page'
import Image from "next/image";
import {Dispatch, SetStateAction, useEffect} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


export default function Dashboardnavcomp({user,isOpen,setIsOpen}:{user:ISignupinput,isOpen:boolean,setIsOpen:Dispatch<SetStateAction<boolean>>}){
     const router = useRouter()
     const pathname = usePathname()
    return(<>
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
            <MdHomeFilled className="text-2xl"  onClick={()=>router.push('/dashboard')}/>
            Home
          </li>
          <li className="flex items-center text-xs gap-x-1 pl-5  font-semibold" onClick={()=>router.push('/dashboard/beneficiaries')}>
            <IoPersonAdd className="text-2xl" />
            Beneficiaries
          </li>
          <li className={"flex items-center text-xs gap-x-1 pl-5  font-semibold"}onClick={()=>router.push('/dashboard/transactions')} >
            <PiReceiptFill className="text-2xl" />
            Transactions
          </li>
          <li className="flex items-center text-xs gap-x-1 pl-5  font-semibold" onClick={()=>router.push('/dashboard/settings')}>
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
      
    
    
    </>)
}