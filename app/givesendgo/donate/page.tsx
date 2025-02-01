'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import ROY from '../../../public/ROY.webp'
import Beadifferent from '../../../../public/bedifferencemaker.png'

import Givesendgoimg from '../../../../public/givesendgo.png'
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import {Input} from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
export default function Donate(){
        const [open, setOpen] = useState(false);
        const [firstname, setFirstname] = useState('');
        const [lastname, setLastname] = useState('');
        const [message, setMessage] = useState('');
    return (
        <div>
              <nav className="flex justify-between items-center bg-white font-semibold p-4 shadow-lg">
    <div className="md:flex md:gap-x-3">
           <Image src={Givesendgoimg} width={200} className="" alt="Givesendgo" />
            <p className='mt-3 md:block hidden'>Discover</p>
            <IoIosSearch className="mt-2 md:block hidden" />
    </div>

    <div className='md:flex md:gap-x-6  hidden'>
        <p className="mt-2">About</p>
        <p className="mt-2">Pricing & Fees</p>
        <p className="mt-2">Sign In</p>
        <Button className='bg-red-600 text-white'>Start a GiveSendGo</Button>
    </div>
    <RxHamburgerMenu className="md:hidden z-10 cursor-pointer" onClick={() => setOpen(!open)} />
      


  </nav>
  <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4"
      >
        <p className="text-xl font-semibold">Menu</p>
        <ul className="mt-4 space-y-2">
          <li className="p-2 hover:bg-gray-200 rounded">Discover</li>
          <li className="p-2 hover:bg-gray-200 rounded">Pricing & Fees</li>
          <li className="p-2 hover:bg-gray-200 rounded">Sign In</li>
          <li className="p-2 hover:bg-gray-200 rounded">Start a GiveSendGo</li>
        </ul>
      </motion.div>


      <main className='md:w-3/5 p-10'>

        <h1 className='text-4xl'>Donate to Roy's New Hip</h1>
        <i>"Every man shall give as he is able, according to the blessing of the LORD your God which He has given you."</i>
        <p className='font-medium'>Deut. 16:17</p>
<hr />


<div className='mt-10'>
    <Input className='p-10 mb-10' placeholder='Amount'/>
    <label htmlFor="fistname">Email</label>

   <Input placeholder='Email'/>

   <div className='flex gap-10 mt-5 mb-5'>
   <div>
    <label htmlFor="fistname">First Name</label>
    <Input onChange={(e)=>setFirstname(e.target.value)} value={firstname} placeholder='Firstname'/>
   </div>
   <div>
    <label htmlFor="Last Name">Last Name</label>
    <Input
    onChange={(e)=>setLastname(e.target.value)} value={lastname} placeholder='Lastname'/>
   </div>
   </div>
   <label  htmlFor="Message">Message</label>
   <Textarea onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Message' />
</div>
      <Button className='mt-5 w-full py-5 bg-teal-500'>Submit</Button>
      </main>


      <div className="py-10">

<Image src={Beadifferent} alt='' className=" mx-2" />
      </div>
  
        </div>
    )

}