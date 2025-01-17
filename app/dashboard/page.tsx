import { Avatar ,AvatarFallback} from "@/components/ui/avatar"
import { FaBell } from "react-icons/fa";
import { TfiReceipt } from "react-icons/tfi"
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
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
export default function Dashboard(){

  return<>

  <nav className="flex justify-between items-center p-6">
    <div className="flex gap-x-6 items-center">
      <FaBell className="text-2xl" />
      <Avatar className="bg-black">
      <AvatarFallback className="font-medium tracking-wider">FE</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">Franklin Esendu</p>
        <p className="text-xs">franklinebi75@gmail.com</p>
      </div>
    </div>

    <RxHamburgerMenu className="text-2xl font-medium"/>

  </nav>

  <main className="px-6 mt-6">
    <div className="bg-orange-500 w-full h-[16rem] rounded-xl text-white p-5 relative">

      <div className="font-medium text-sm">

      <p>Regular</p>
      <p>134948850</p>
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
      <p className="text-lg mt-2 font-bold tracking-tighter "><span>$</span>1,000</p>

      <div className="flex gap-x-2 mx-auto w-fit">
        <div className="w-[4rem] h-[4rem] bg-white rounded-2xl flex flex-col justify-center">
        <TfiReceipt className="text-black text-center text-2xl mx-auto" />
        </div>
        <div className="w-[4rem] h-[4rem] bg-white rounded-2xl flex flex-col justify-center">
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
  
  
  </>
}