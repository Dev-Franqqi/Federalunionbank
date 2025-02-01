'use client'
import { Button } from "@/components/ui/button";
// import {motion} from "framer-motion"
import { IoIosArrowForward } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import Givesendgo from '../public/givesendgo.png'
import { PiPiggyBank } from "react-icons/pi";
import { MdOutlineHome } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { CiMobile3 } from "react-icons/ci";
import { GoDeviceDesktop } from "react-icons/go";
import Menubar from "./mycomps/Menubar";
import Desktopnav from "./mycomps/Desktopnav";
import Link from "next/link";
import Image from "next/image";
import firstimage from "./image/pexels-gustavo-fring-3985233.jpg";
import secondimage from "./image/illus-hand-money-5-420x420.jpg";
import thirdimage from "./image/photo-woman-looking-at-phone-blue-coat-420x420.jpg";
import fourthimage from "./image/photo-altitude-go-with-autumn-tablescape-420x420.jpg";
import fifthimage from "./image/photo-military-credit-cards-420x420.jpg";
import sixthimage from "./image/photo-woman-smiling-at-phone-800x450.jpg";
import seventhimage from "./image/photo-credit-card-reward-675x450.jpg";
import eighthimage from "./image/photo-credit-score-675x450.jpg";
import ninthimage from "./image/photo-child-wearing-yarn-wig-675x450.jpg";
import { useEffect } from "react";
import useLoading from "./mycomps/hooks/useLoading";
import Loadingcomp from "./mycomps/Loadingcomp";
export default function Home() {
  const router = useRouter();
  
  const {loading,setLoading} = useLoading();
  useEffect(()=>{
    
      setTimeout(()=>{
        setLoading(false)
        console.log(loading)
      },2000)
    
    
  },[])
  return (
    <>

    {
      loading?<Loadingcomp />:
      <>
      <Menubar />
      <Desktopnav />

      <main className="bg-white p-4">
        <section className="relative">
          <Image src={firstimage} alt="" />

          <section className="card bg-white relative -top-6 mx-auto px-3 py-5 md:w-2/5 md:px-5 md:absolute md:top-40 md:left-10">
            <h1 className="font-semibold text-neutral-700">PERSONAL BANKING</h1>
            <h2 className="font-bold text-xl">Earn a bonus up to $450</h2>
            <p className="mb-2 text-neutral-700">
              Open new Bank Smartly Checking and Standard Savings accounts and
              complete required activities
            </p>
            <Button className="block w-full mb-2 bg-red-600 text-white">
              Earn your bonus
            </Button>
            <Button
              className=" block w-full border-blue-500 text-blue-500"
              variant={'outline'}
            >
              See details
            </Button>
            <p className="text-xs mt-4 text-gray-600">
              Offer valid online only through Nov. 30. Terms and limitations
              apply.
            </p>
          </section>
        </section>
        <div className="p-8">
      <Link href='/givesendgo' className="text-blue-600">Click here to view available Donations <IoIosArrowForward className="inline font-semibold" /></Link>
      <Image src={Givesendgo} alt="" />
      </div>
        <section className="card bg-white px-3 py-5 mx-auto mb-6 md:hidden">
          <Image src={secondimage} className="mx-auto h-56 w-full" alt="" />
          <h2 className="font-semibold text-neutral-700 mt-4 ">
            SMART REWARDS
          </h2>

          <h3 className="font-bold text-xl">
            Get exclusive benefits with your checking account.
          </h3>
          <Link className="hover:underline text-blue-700 " href="/signup">
            Enroll now <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="card bg-white px-3 py-5 mx-auto mb-6 md:hidden">
          <Image src={thirdimage} className="mx-auto h-56 w-full" alt="" />
          <h2 className="font-semibold text-neutral-700 mt-4">
            U.S. BANCORP INVESTMENTS
          </h2>
          <h3 className="font-bold mt-2 text-xl">
            Get $100 when you open an Automated Investor account.
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            Start investing <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="card bg-white px-3 py-5 mx-auto mb-6 md:hidden">
          <Image src={fourthimage} alt="" className="mx-auto h-56 w-full" />
          <h2 className="font-semibold text-neutral-700 mt-4">
            ALTITUDE GO CARD
          </h2>
          <h3 className="font-bold text-xl mt-2">
            Savor the season with 4X points on dining
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            Get the card <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="card bg-white px-3 py-5 mx-auto mb-6 md:hidden">
          <Image src={fifthimage} alt="" className="mx-auto h-56 w-full" />
          <h2 className="font-semibold text-neutral-700 mt-4">
            THANK A VETERAN
          </h2>
          <h3 className="font-bold text-xl mt-2">
            Show your patriotism with every purchase.
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            See the designs <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="iconsSection flex flex-wrap gap-x-1 gap-y-2 bg-white py-3 justify-between mx-auto ">
          <div className="border border-neutral-200 mx-auto rounded-md text-center p-6 md:w-1/6">
            <CiCreditCard1 className="mx-auto text-blue-900 text-4xl md:text-6xl" />
            <p className="">Credit cards</p>
          </div>
          <div className="border border-neutral-200 mx-auto rounded-md text-center p-6 md:w-1/6">
            <CiMoneyCheck1 className="mx-auto text-4xl md:text-6xl" />
            <p>Checking</p>
          </div>
          <div className="border border-neutral-200 mx-auto rounded-md text-center p-6 md:w-1/6">
            <FaSackDollar className="mx-auto text-3xl d:text-5xl" />
            <p>Savings</p>
          </div>

          <div className="border border-neutral-200 mx-auto rounded-md text-center p-6 md:1/6">
            <PiPiggyBank className="mx-auto text-3xl md:text-5xl" />
            <p>CDs</p>
          </div>

          <div className="border border-neutral-200 mx-auto rounded-md text-center p-6">
            <MdOutlineHome className="mx-auto text-3xl md:text-5xl" />
            <p>Mortgage</p>
          </div>
          <div className="border border-neutral-200 mx-auto rounded-md text-center p-6">
            <BsCashStack className="mx-auto text-3xl md:text-5xl" />
            <p>Investing</p>
          </div>
        </section>
      </main>

      <section className="p-4 md:flex md:px-36 md:gap-7">
        <Image src={sixthimage} className="shadow-lg md:w-2/4" alt="" />

        <div>
          <h2 className="text-black mb-2 font-semibold text-3xl mt-2 md:text-4xl">
            Banking smarter is easier than ever.
          </h2>
          <p className="text-gray-700 mb-2 text-sm md:text-lg">
            Unlock more benefits and rewards plus earn when you open a checking
            account
          </p>

          <p className="text-gray-700 text-sm">
            Apply in minutes with just $25.
          </p>
          <Button onClick={()=>router.push('/signup')} className="bg-blue-700 text-white mt-4 w-full">
            Open a checking account
          </Button>
        </div>
      </section>

      <section className="bg-white p-6 ">
        <h3 className="text-2xl font-semibold text-blue-950 mb-5 md:text-4xl">
          Access us wherever you go.
        </h3>
        <ul className="text-sm md:text-lg">
          <li className="mb-4">
            <span className="flex gap-x-2 ">
              <CiMobile3 className="text-3xl" /> <span>Online banking</span>
            </span>
            <Link href="/login" className="block text-blue-500">
              Access your accounts <IoIosArrowForward className="inline" />
            </Link>
          </li>

          <li className="mb-2">
            <span className="flex gap-x-2">
              <GoDeviceDesktop className="text-3xl" />
              24-hour Banking
            </span>
            <div className="text-blue-500">Call +1 719-629-0063</div>
          </li>
        </ul>
      </section>

      <section className="px-4 py-4 text-sm mb-2 mt-10 md:text-lg">
        <h3 className="text-black text-2xl mb-6 font-bold md:text-4xl">
          Borrowing money is a big deal. We&rsquo;re ready to help.
        </h3>
        <p className="mb-8 text-sm md:text-lg">
          From calculators and rate charts to get you started, to experienced
          loan officers and bankers,  bank has answers for all your loan and
          mortgage questions.
        </p>
        <p className="text-sm font-semibold mb-1 md:text-lg">Home mortgage</p>
        <Link className="text-blue-500 font-medium mb-3" href="/">
          Learn more <IoIosArrowForward className="inline font-semibold" />
        </Link>

        <p className="font-semibold mt-3 text-sm md:text-lg">
          Home equity line of credit
        </p>
        <Link className="text-blue-500 font-medium" href="/">
          Learn more <IoIosArrowForward className="inline" />
        </Link>
      </section>
      <hr className="mb-6" />
      

      <div className="bg-white ">
        <h3 className="text-2xl p-6 text-blue-900 font-bold mb-3 md:text-4xl">
          Happening now
        </h3>

        <div className="md:flex">
          <section className="p-5 bg-white">
            <Image src={seventhimage} alt="" />

            <p className="text-base mt-2 text-gray-600 mb-1 md:text-lg">
              HOLIDAY SHOPPING
            </p>

            <p className="mb-2 text-xl font-semibold md:text-2xl">
              How to maximie credit card rewards for more bang for your buck
            </p>
            <Link className="text-blue-500 font-medium text-sm md:text-base" href="/">
              Get the details <IoIosArrowForward className="inline" />
            </Link>
          </section>
          <section className="p-5 bg-white">
            <Image src={eighthimage} alt="" />

            <p className="text-base mt-2 text-gray-600 mb-1 md:text-lg">
              CREDIT AWARENESS
            </p>

            <p className="mb-2 text-xl font-semibold md:text-2xl">
              Five ways to build credit history and maintain a good score
            </p>
            <Link className="text-blue-500 font-medium text-sm md:text-base" href="/">
              Follow these tips <IoIosArrowForward className="inline" />
            </Link>
          </section>
          <section className="p-5 bg-white">
            <Image src={ninthimage} alt="" />

            <p className="text-base mt-2 text-gray-600 mb-1 md:text-lg">GIVING BACK</p>

            <p className="mb-2 text-xl font-semibold md:text-2xl">
              Volunteers make magic for kids battling cancer
            </p>
            <Link className="text-blue-500 font-medium text-sm md:text-base" href="/">
              Read more <IoIosArrowForward className="inline" />
            </Link>
          </section>
        </div>
      </div>

      <footer className="bg-blue-800 p-6  text-white md:p-10">
        <div className="flex gap-x-6 mb-4 leading-10 md:gap-48">
          <ul>
            <li>Support</li>
            <li>Financial education</li>
            <li>Careers</li>
            <li>Online trackig & advertising</li>
          </ul>

          <ul>
            <li>Security</li>
            <li>Site map</li>
            <li>Accessibility</li>
            <li>Privacy</li>
          </ul>
        </div>

        <hr className="mb-7" />
        <p>AFCU bank</p>
        <p>800 Nicollet Mall</p>
        <div className="flex gap-2">
          <p>Minneapolis, MN 55402</p>
          <p>2025 AFCU Bank</p>
        </div>
      </footer>
      </>

    }
      
    </>
  );
}
