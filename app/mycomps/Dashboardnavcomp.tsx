'use client'
import { Avatar ,AvatarFallback} from "@/components/ui/avatar"
import { FaHandHoldingHeart } from "react-icons/fa";

import { FaBell } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { PiReceiptFill } from "react-icons/pi";
import Logo from '../../public/AFCU.png'
import {motion} from 'framer-motion'
import { useRouter,usePathname } from "next/navigation";
import { IoIosClose } from "react-icons/io";

import {ISignupinput} from '../signup/page'
import Image from "next/image";
import {Dispatch, SetStateAction, useEffect, useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import useUser from "./hooks/useUser";
import useOpen from './hooks/useOpen'
import Cookies from "js-cookie";
export default function Dashboardnavcomp({mP}:{mP?:boolean}){
     const router = useRouter()
     const pathname = usePathname()
     const {user,setUser} = useUser()
     const {isOpen,setIsOpen} = useOpen()
     const [hasUnread, setHasUnread] = useState(false)
     const handleNotification = ()=>{

      setHasUnread(false)
      Cookies.set('notification', 'read') // Set a cookie to mark notifications as read
      router.push('/dashboard/notification')

     }
     const logout =async()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logging out')
            Cookies.remove('User')
            router.push('/login')
          })
     }
     useEffect(()=>{
        const notificationCookie = Cookies.get('notification')
        if(!notificationCookie){

          setHasUnread(true)
        }
        if(notificationCookie === 'read'){
          setHasUnread(false)
        }

        setIsOpen(false)
        const Usercookie = Cookies.get('User')
        if(Usercookie){
          setUser(JSON.parse(Usercookie))
        }else{
          // // router.push('/login')
        }
     },[])
    return(<div className=''>
    <nav className="flex justify-between items-center p-6">
    <div className="flex gap-x-6 items-center">
      {mP?  <div onClick={handleNotification} className="relative w-fit">
      <FaBell className="text-2xl" />
      {hasUnread && (
        <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full">
          1
        </span>
      )}
    </div>:
      <FaBell className="text-2xl" />
    
    }
  
      <Avatar className="bg-black">
      <AvatarFallback className="font-medium tracking-wider">
  {user 
    ? `${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}` 
    
    : "N/A"}
</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{}</p>
        <p className="text-sm font-medium">{user?
        `${user.firstname} ${user.lastname}`
        :"N/A"}</p>
        <p className="text-xs">{user?
        `${user.email}`
        :"N/A"}</p>
      </div>
    </div>

  {
    isOpen ? 
    <IoIosClose onClick={()=>setIsOpen(false)} className={"text-2xl font-medium md:hidden"} />:
    <RxHamburgerMenu onClick={()=>setIsOpen(true)} className={"text-2xl font-medium md:hidden"}/>

  }


  </nav>
  <motion.aside
        className="w-3/5 bg-gray-100 h-screen absolute z-10 top-0 flex flex-col justify-between md:hidden"
        initial={{ x: "-100%" }} // Start off-screen
        animate={{ x: isOpen ? "0%" : "-100%" }} // Slide in or out
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth animation
      >
        {/* Your aside content */}
        <Image src={Logo} width={100} className="ml-4 mt-4" alt="AFCU" />
        <ul className="h-2/5 flex flex-col justify-between">
       
          <li className="cursor-pointer flex items-center text-xs gap-x-1 pl-5  font-medium" onClick={()=>router.push('/dashboard/beneficiaries')}>
          <MdHomeFilled className="text-2xl"  onClick={()=>router.push('/dashboard')}/>
            Home
          </li>
          <li className="cursor-pointer flex items-center text-xs gap-x-1 pl-5  font-medium" onClick={()=>router.push('/dashboard/beneficiaries')}>
            <IoPersonAdd className="text-2xl" />
            Beneficiaries
          </li>
          <li className={"cursor-pointer flex items-center text-xs gap-x-1 pl-5  font-medium"}onClick={()=>router.push('/dashboard/transactions')} >
            <PiReceiptFill className="text-2xl" />
            Transactions
          </li>
          <li className="cursor-pointer flex items-center text-xs gap-x-1 pl-5  font-medium" onClick={()=>router.push('/dashboard/settings')}>
            <FaGear className="text-2xl" />
            Profile Settings
          </li>
          {/* <li className="cursor-pointer flex items-center text-xs gap-x-1 pl-5  font-medium" onClick={()=>router.push('/dashboard/givesendgo')}>
            <FaHandHoldingHeart className="text-2xl" />
            Donate
          </li> */}
          <li onClick={logout} className="cursor-pointer flex items-center text-xs gap-x-1 pl-5  font-medium">
            <IoLogOutSharp className="text-3xl" />
            Logout
          </li>
        </ul>
        <div className="h-1/5"></div>
      </motion.aside>
      
    
    
    </div>)
}