'use client'
import { Avatar ,AvatarFallback} from "@/components/ui/avatar"
import { FaBell } from "react-icons/fa";
import { TfiReceipt } from "react-icons/tfi"
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import { ISignupinput } from "../../signup/page";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { PiReceiptFill } from "react-icons/pi";
import Logo from '../../../public/AFCU.png'
import {motion} from 'framer-motion'
import Image from "next/image";
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RxHamburgerMenu } from "react-icons/rx";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
export default function Dashboard(){
  const [user,setUser] = useState<ISignupinput>()
  const [isOpen, setIsOpen] = useState(false);
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
 
      


  
  
  </>
}