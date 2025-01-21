'use client'
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp"
import useUser from "@/app/mycomps/hooks/useUser"
import { useEffect } from "react"
import { IoPersonOutline } from "react-icons/io5";
import Cookies from "js-cookie"
import { useState } from "react";
import {FaAngleLeft} from 'react-icons/fa'
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";
import { auth } from "@/app/mycomps/firebase";
import { updatePassword } from "firebase/auth";
import { Button } from "@/components/ui/button";
export default function Profile(){
    const {user,setUser} = useUser()
    const router = useRouter()
    useEffect(()=>{
        const Usercookies = Cookies.get("User")
        if(!user){
            if(Usercookies){
                setUser(JSON.parse(Usercookies))
            }else{
                router.push('/login')

            }
        }
    },[])

    return(
        <>
        <Dashboardnavcomp />
        <main className=" py-6 px-2">
             <div onClick={()=>router.push('/dashboard')} className=" cursor-pointer flex gap-x-2 items-center pt-6 py-3 px-6" >
                             <FaAngleLeft />
             
                         <p className="text-sm font-semibold text-orange-600">Back</p>
                         </div>
            <h1 className="text-2xl font-bold px-4">Profile settings</h1>

            <div className="bg-white rouded-md p-4 mt-4">
                <div className="rounded-xl bg-gray-200 py-10">
                        <div className=" flex flex-col justify-center w-44 h-44 mx-auto rounded-full border border-orange-600 bg-orange-100"
                        >
                            <IoPersonOutline className="mx-auto text-3xl text-orange-600" />

                        </div>

                        <h2 className="font-bold text-xl text-center mt-4">{user.firstname.toUpperCase()} {user.lastname.toUpperCase()}</h2>
                        <p className="font-medium text-sm text-center mt-1 text-gray-600">{user.email}</p>


                        <div className="flex flex-col gap-y-3 py-8 px-4">
                            <div>
                                <p className="text-sm text-gray-400 text-medium">Phone number</p>
                                <p className="text-lg font-bold text-gray-800">+{user.phoneNumber}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400 text-medium">Account Number</p>
                                <p className="text-lg font-bold text-gray-800">{user.accountNumber}</p>
                            </div>
                        </div>
                
                </div>
                <TabSwitcher />
            </div>
        </main>

        </>
    )
}


const TabSwitcher = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Transfer");

  // Function to handle tab changes
  const handleTabClick = (tabName:string) => {
    setActiveTab(tabName);
  };

  return (
    <section className="px-2 py-5">
      {/* Tabs */}
      <div className="w-full py-3 px-2 flex justify-between ">
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Transfer" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Transfer")}
        >
          Transfer
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Reset password" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Reset Password")}
        >
          Reset Password
        </div>
        <div
          className={`text-xs cursor-pointer py-3  text-center font-medium w-1/4 ${
            activeTab === "Create Tokens" ? " text-orange-600 border-b border-b-orange-600" : ""
          }`}
          onClick={() => handleTabClick("Create Tokens")}
        >
          Create Tokens
        </div>
      
      </div>

      {/* Content Section */}
      <div className="mt-5">
        {activeTab === "Transfer" && <Transfer />}
        {activeTab === "Reset Password" && <Resetpassword />}
        
        {activeTab === "Create Tokens" && <p className="font-medium px-6">Reset Password</p>}
      </div>
    </section>
  );

};
const Transfer = ()=>{
    return(<>
    <p className='font-semibold text-lg'>Transfers</p>
    

    <div className="bg-gray-100 mt-6 p-4 rounded-md font-medium">
        <div>
        <p >Other Banks</p>

        <div className="flex justify-between mt-5 py-4 text-gray-600">
            <p>Daily Transfer Limit</p>
            <p>$100,000</p>
        </div>
        <Separator />
        <div className="flex justify-between py-4 text-gray-600">
            <p>Maximum amount per transaction</p>
            <p>$100,000</p>
        </div>

        </div>
    </div>


    <p className='font-semibold text-lg mt-6'>Payments</p>



    <div className="bg-gray-100 mt-3 p-4 rounded-md font-medium ">
        <div>
        <p >Create Tokens</p>

        <div className="flex justify-between mt-5 py-4 text-gray-600">
            <p>Daily Transfer Limit</p>
            <p>$10,000</p>
        </div>
        <Separator />
        <div className="flex justify-between py-4 text-gray-600">
            <p>Maximum amount per transaction</p>
            <p>$1,000</p>
        </div>

        </div>
    </div>
    </>)
}

const Resetpassword = ()=>{
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState(false)
    const handleSubmit =async ()=>{
        setError(false)
        setSuccess(false)
        if(password !== confirmPassword){
            alert('Passwords do not match')
            return
        }
        try{
            const authuser = auth.currentUser
            if(authuser !== null){

                await updatePassword(authuser,password).then(()=>{
                    setSuccess(true)
                })
            }else{
                throw error
            }
        }catch(e){
            alert('An error occured, please try again')
            setError(true)
        }

    }
    return(
        <>
        <p className='mb-4 text-xl font-bold'>Update Password</p>
        <Input className='w-full p-4 mb-3' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter new password' />
        <Input className='w-full p-2 mb-3' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm new password' />
        <Button className='w-full bg-orange-600 text-white font-semibold'>Submit</Button>
        </>
    )
}