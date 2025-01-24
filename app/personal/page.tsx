'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Menubar from "../mycomps/Menubar"
  import Desktopnav from "../mycomps/Desktopnav"
  import Laptopimg from '../../public/personal/illus-laptop-online-banking-dashboard-3x2.png'
  import Trackspending from '../../public/personal/photo-woman-mobile-spending-tracker-16x9.png'
export default function Personal(){
    const router = useRouter()
    return(<>
    <Menubar/>
    <Desktopnav/>
    <main className="py-10 px-4 md:w-3/5 md:mx-auto">
    <div className="md:flex md:flex-row-reverse md:justify-between">

    
        <Image src={Laptopimg} alt=''/>
        <div className="py-6">
            <p className="tracking-wider text-gray-400 font-semibold">ONLINE BANKING</p>
            <h1 className="text-3xl mt-3 font-semibold mb-4">Bank online to easily manage your money.</h1>

            <p>Make everyday banking simple with online banking. <Link className="text-orange-600" href='/signup'>Open a bank account</Link> in minutes and manage your account online.</p>
            <p className="mt-3">Already a client? <Link className="text-orange-600" href='/login'>Log in</Link></p>
            <Button onClick={()=>router.push('/signup')} className="w-full mt-4 bg-orange-600">Enrol in online banking</Button>
        </div>
        </div>

        <div className="mt-6">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Banking made easy</h2>
            <p>Explore the basics of online and mobile banking along with some of our tools.</p>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is online banking?</AccordionTrigger>
    <AccordionContent>
    Online banking lets you manage your money, deposit checks and monitor your bank accounts from a desktop, tablet or mobile device.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>What is the benefit of mobile banking?</AccordionTrigger>
    <AccordionContent>
    Mobile banking allows you to bank on the go using your smart phone or tablet. You can access and manage your account profile, review your transactions, send money or redeem rewards all from one location.
    </AccordionContent>
  </AccordionItem>
</Accordion>
        
        </div>

        <div>
            <Image src={Trackspending} alt=''/>
            <h3 className="text-2xl font-semibold mt-3 mb-2">Track your spending.</h3>
            <p>See all your finances in one place, breeze through budgets and track spending through personalized insights.</p>
        </div>

        <div className="mt-6">
            <h2 className="text-orange-600 text-2xl mb-3">We have your back with secure online banking.</h2>
            <p>Our industry-leading encryption and security features are always on to protect you and your information.</p>

            <ul className="flex flex-col md:flex-row md:gap-x-6 md:mb-10  gap-y-6 mt-4">


            <li>
                <h3 className='text-orange-600 font-semibold text-lg'>Digital security guarantee</h3>
                <p>You aren&apos;t liable for any unauthorized transactions made with the mobile app or online banking.</p>
            </li>
            <li>
                <h3 className='text-orange-600 font-semibold text-lg'>Security center</h3>
                <p>Boost the security of your accounts in minutes by easily enabling security features.</p>
            </li>
            <li>
                <h3 className='text-orange-600 font-semibold text-lg'>Automatic security alerts</h3>
                <p>There&apos; no need to sign up for alerts that inform you of important activity such as requests to change your password.</p>
            </li>
            </ul>

        </div>

        <section>
            <h3 className="text-3xl font-semibold">Frequently asked questions about online and mobile banking.</h3>
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" hover:text-orange-600">What is the difference between online and mobile banking?</AccordionTrigger>
    <AccordionContent>
    The major difference between online and mobile banking is how you access your account. With online banking, you log in to your account via a desktop, tablet or mobile device using your username and password. With mobile banking, once you download the app from your app store onto your mobile device or tablet, you can access your account through the app. Another difference between the two is the mobile app allows you to deposit checks using your mobile device or tablet.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger className=" hover:text-orange-600">How current is my account information?</AccordionTrigger>
    <AccordionContent>
    Most account information is updated in real time as transactions are processed throughout the day. Mobile and online banking offers you the most current balance and transaction information available.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-3">
    <AccordionTrigger className=" hover:text-orange-600">What can I do to protect myself against fraud??</AccordionTrigger>
    <AccordionContent>
    The most important thing you can do is keep your login credentials confidential. Logging out of your account when you are finished using digital services is also important. 
    </AccordionContent>
  </AccordionItem>

</Accordion>
        </section>

        <div className="mt-5">
            <h3>TAKE THE NEXT STEP</h3>
            <ul className="md:flex md:gap-x-5 text-orange-600">
                <li><Link href='/signup'>Enroll in online banking</Link></li>
                <li><Link href='/login'>Log in</Link></li>
            </ul>
        </div>
    </main>

    
    
    
    </>)
}