"use client";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../public/AFCU.png";
import Image from "next/image";
export default function Menubar() {
  const [isElementVisible, setIsElementVisible] = useState(false);

  const handleButtonClick = () => {
    setIsElementVisible((prev) => !prev);
    document.body.style.overflow = isElementVisible ? "visible" : "hidden";
  };
  return (
    <>
      <nav className="fixed z-10 w-screen md:hidden">
        <div className="flex  justify-between px-3 bg-white pt-2 text-xl">
          <HiBars3 onClick={handleButtonClick} className="text-3xl" />
          <header className=" font-bold ml-5 text-center"><Image src={Logo} alt=''/></header>
          <Button className="font-bold text-blue-800" variant={'link'} >
            <Link className="mb-2" href="/login">
              Log in
            </Link>
          </Button>
        </div>
      </nav>

      <motion.aside
        animate={{
          opacity: isElementVisible ? 1 : 0,
          x: isElementVisible ? 0 : -30,
        }}
        exit={{
          opacity: 0,
          x: -30,
          transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            staggerChildren: 0.1,
          },
        }}
        className={`p-6 mt-10 z-10 w-4/5 h-screen bg-white ${
          isElementVisible ? "fixed block" : "absolute hidden"
        }`}
      >
        <ul className="mb-6 text-sm font-bold leading-loose">
          <li className="mb-4 flex gap-1">
            <FaHeadphones className="mt-2" />
            <span>Support</span>
          </li>
          <li className="mb-4 flex gap-1">
            <FaSackDollar className="mt-2" />
            <span>Financial Education</span>
          </li>
          <li className="mb-4 flex gap-1">
            <FaPeopleGroup className="mt-2" />
            <span>About us</span>
          </li>
        </ul>

        <ul className=" mt-4 font-bold text-lg">
          <li className="border-b flex justify-between py-4">
            Personal <IoIosArrowForward className="mt-2" />
          </li>
          <li className="border-b flex justify-between py-4">
            Wealth Management <IoIosArrowForward className="mt-2" />
          </li>
          <li className="border-b flex justify-between py-4">
            Business <IoIosArrowForward className="mt-2" />
          </li>
          <li className="border-b flex justify-between py-4">
            Corporate & Commercial <IoIosArrowForward className="mt-2" />
          </li>
        </ul>
      </motion.aside>
    </>
  );
}
