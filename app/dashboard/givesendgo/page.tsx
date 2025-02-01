'use client'
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import Givesendgoimg from '../../../public/givesendgo.png'
import ROY from '../../../public/ROY.webp'
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Beadifferent from '../../../public/bedifferencemaker.png'
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
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
  
export default function Givesendgo(){
    const [loveNo,setLoveNo] = useState(0)
    const [name,setName] = useState('')
    const [prayer,setPrayer] = useState('')
    const [email,setEmail] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter()

    return (<>
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

      


  <main className="bg-white mt-1 md:flex">
    <section className="p-10 md:w-3/5">
    <Image src={ROY} className="" alt="" />


            <div className="mt-10">

                <h1 className="text-4xl mb-4 font-semibold ">Roy&apos;s New Hip</h1>

                <div className="md:flex md:flex-col md:gap-y-4 text-gray-800">


                <p>Hello everyone, this is a different message than what we are used to doing. The Tratter House,( Nick, Blake and Roy) are usually the ones along with all those that follow and support us, are always trying to help others. Whether it be raising money for the horrendous fire at Tioga Downs in NY that killed thirty horses or raising money for charity for our Veterans and even helping raise money for the young lady who lost her house to a fire.</p>

                <p>Now we are asking all of you for help. Many of you know that Roy rode bulls professionally for 13 years and also grew up in the racehorse world.  Well, all that has caught up to him and he desperately needs a new hip. If you&apos;ve ever been around him you notice he walks with a limp, he can&apos;t run or ride a horse anymore and I can tell you it&apos;s not getting any better.  He doesn&apos;t have insurance and a surgery like this is pretty expensive.  We have found a place that will do it for a fraction of what it would normally cost but for him to put that out of pocket is a big hit. But this is an opportunity he can&apos;t pass up.</p>

                <p>So now we are reaching out to you to and asking if you could help.  All the donations will go to pay the surgery, travel expenses and any other expenses that he may run into.</p>

                <p>Y&apos;all have always been so kind and supportive and it does not go unnoticed.  Thank you so much and God Bless each and every one.</p>
                </div>

            </div>


            <div className="md:mt-10">

                <div className="bg-gray-100 mb-4 rounded-lg w-full  h-full  p-16 shadow-md">
                    <h2 className="text-2xl md:text-3xl mb-2">Updates</h2>
                    <p>Follow this campaign to get email notifications when the campaign owner posts an update</p>
                    <Button className="px-10 text-white bg-red-600 p-6 mt-3">Follow</Button>
                </div>

                <div className="bg-gray-100 mb-4 rounded-lg w-full  h-fit p-16 shadow-md">
                    <h2 className="text-2xl md:text-3xl mb-2">Prayer Requests</h2>
                    <p className="mb-2">Click the Pray button to let the campaign owner know you are praying for them.</p>
                    <Button className="px-10 text-white bg-teal-600 p-6 mt-3">Pray</Button>
                   
                </div>
            </div>
    </section>

    <section className="md:w-2/5 md:py-10  ">

        <div className="bg-gray-50 p-5 md:w-3/5 rounded-lg">


            <div>

                

        <div className="flex justify-between md:text-[1rem] mb-4">
            <p><span className="font-medium">Goal:</span> USD $32,000</p>
            <p><span className="font-medium">Raised: </span> $12,265</p>
        </div>
        <Progress value={40} className="w-[100%] text-teal-500 " />
            </div>

            <p className="mt-3">Campaign created by <span className="font-medium">Roy Dinges</span></p>
            <p className="mt-3">Campaign funds will be recieved by <span className="font-medium">Roy Dinges</span></p>
            <div onClick={()=>router.push('/dashboard/givesendgo/donate')} className="bg-red-500 text-white text-xl flex justify-between p-4 rounded-lg font-semibold mt-4">
                <p>Give</p>
                <span>
                    110
                </span>
            </div>
    

            
            <div className=" bg-teal-400 text-white text-xl flex justify-between p-4 rounded-lg font-semibold mt-4 w-full">
                <p>Share</p>
                <span>
                    18
                </span>
            </div>

  <div className=" bg-teal-400 text-white text-xl flex justify-between p-4 rounded-lg font-semibold mt-4 w-full">
               
           
            <AlertDialog>
            <AlertDialogTrigger> 
                <p>Pray</p>
                </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle className="md:text-2xl text-center">Pray</AlertDialogTitle>
      <AlertDialogDescription>
        <p className="text-center">Send an encouraging message or prayer to the campaign owner.</p>
       <p className="text-center mt-2">Let them know you are praying for them.</p>

       <p className="mt-4">The prayer of a righteous person is powerful and effective. James 5:16</p>

       <Textarea value={prayer} onChange={(e)=>setPrayer(e.target.value)} className="mt-8" placeholder="Type your message here." />

       <div className="flex mt-4 gap-x-4">


       <Input onChange={(e)=>setName(e.target.value)} value={name} className="" placeholder="Name"/>
       
       <Input type="email" className="" 
       onChange={(e)=>setEmail(e.target.value)} value={email}placeholder="email"/>
       </div>

      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Submit</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
<span>
                    109
                </span>
            </div>


        </div>



        <div className="mt-10 md:w-3/5">

            <h2 className="text-2xl font-medium mb-10 px-2">Recent Donations</h2>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
  <ul className="md:flex md:flex-col md:gap-y-2">
    <li className="py-4">
        <p className="text-base"><span className="font-medium">Kami Pecks -</span>$ 50.00 USD</p>
        <span className='text-xs text-gray-600 mt-2'>16 days ago</span><p className="text-sm mt-2">Roy, Having just gone through major hip surgery, I feel your daily pain. God has got you. Prayers lifted up for you this morning that God moves mountains on your behalf. All The Best, Kami Peck</p>
        <div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />
    </li>
    <li>
        <p><span className=" text-base font-medium">Anonymous Giver
-
</span>$ 116.00 USD</p>
<span className='text-xs text-gray-600 mt-2'>24 days ago</span>
<div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />

    </li>
    <li className="py-4">
        <p className="text-base"><span className="font-medium">50
        -</span>$ 50.00 USD</p>
        <span className='text-xs text-gray-600 mt-2'>27 days ago</span><p className="text-sm mt-2">I pray that you will be healed from this pain and that the Lord will give you strength and comfort you as grow in grace. Much love to you!!</p>
        <div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />
    </li>
    
    <li className="py-4">
        <p className="text-base"><span className="font-medium">Stacey</span>$ 50.00 USD</p>
        <span className='text-xs text-gray-600 mt-2'>1 month ago</span><p className="text-sm mt-2">Merry Christmas</p>
        <div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />
    </li>
    <li className="py-4">
        <p className="text-base"><span className="font-medium">Melinda</span>$ 500.00 USD</p>
        <span className='text-xs text-gray-600 mt-2'>1 month ago</span><p className="text-sm mt-2">Happy to help the “real Roy Dinges”! Thanks for being such a great guy! I&apos;ll add you to my prayer list. I truly believe in the power of prayer! I hope your gorgeous girlfriend is going to help you through this. I&apos;ve helped a couple of friends with their hip surgery. Afterwards it&apos;ll be so wonderful to be pain-free! Love and kisses Melinda.</p>
        <div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />
    </li>
    <li className="py-4">
        <p className="text-base"><span className="font-medium">David Santamaria</span>$ 20.00 USD</p>
        <span className='text-xs text-gray-600 mt-2'>10 days ago</span><p className="text-sm mt-2">Wish you a healthy recovery ❤️🌹</p>
        <div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />
    </li>

    <li className="py-4">
        <p className="text-base"><span className="font-medium">Olivia Hardy</span>$ 20.00 USD</p>
        <span className='text-xs text-gray-600 mt-2'>10 days ago</span><p className="text-sm mt-2">$ 105.00 USD</p>
        <div className="mt-3 flex items-center gap-x-1">
        <FaHeart onClick={()=>setLoveNo(prev=>prev+1)} className="text-red-600" />
        <span className="font-meidum">{loveNo}</span>
            
        </div>
    <hr className="px-4 mt-4" />
    </li>
    
  </ul>
  <Button className="text-white bg-teal-500 p-4">See More</Button>
</ScrollArea>

        </div>
    </section>

  </main>
        <div className="py-10">

  <Image src={Beadifferent} alt='' className="mx-auto" />
        </div>
    
    
    
    </>)
}