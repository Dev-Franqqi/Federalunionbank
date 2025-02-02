'use client'
import { ISignupinput } from "../signup/page";
import { FaBell } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import Image from "next/image";
import Logo from '../../public/AFCU.png'
import { useRouter } from "next/navigation";
import { PiReceiptFill } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { FaHandHoldingHeart } from "react-icons/fa";
import Cookies from "js-cookie";
export default function Dashboarddesktop(){
    const router = useRouter()
    const logout =async()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('logging out')
            Cookies.remove('User')
            router.push('/login')
          })
     }
    return(<>
    <aside
        className="hidden w-1/5 bg-gray-200 h-screen  md:flex flex-col justify-between"      >
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
      </aside></>)
}