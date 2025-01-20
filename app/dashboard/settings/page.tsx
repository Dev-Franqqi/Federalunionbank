'use client'
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp"
import useUser from "@/app/mycomps/hooks/useUser"
import { useEffect } from "react"
import { IoPersonOutline } from "react-icons/io5";
import Cookies from "js-cookie"
import {FaAngleLeft} from 'react-icons/fa'
import { useRouter } from "next/navigation"
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
        <main className=" py-6">
             <div onClick={()=>router.push('/dashboard')} className=" cursor-pointer flex gap-x-2 items-center pt-6 py-3 px-6" >
                             <FaAngleLeft />
             
                         <p className="text-sm font-semibold text-orange-600">Back</p>
                         </div>
            <h1 className="text-2xl font-bold">Profile settings</h1>

            <div className="bg-white rouded-md p-4 mt-4">
                <div className="rounded-xl bg-gray-200 py-10">
                        <div className=" flex flex-col justify-center w-44 h-44 mx-auto rounded-full border border-orange-600 bg-orange-100"
                        >
                            <IoPersonOutline className="mx-auto text-xl text-orange-600" />

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
            </div>
        </main>

        </>
    )
}