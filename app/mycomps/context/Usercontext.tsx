'use client'
import { createContext,Dispatch,ReactNode,SetStateAction,useState } from "react"
import { ISignupinput } from "@/app/signup/page"

interface IUsercontext{
    user:ISignupinput,
    setUser:Dispatch<SetStateAction<ISignupinput>>
}

const userDefault:ISignupinput = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    address:'',
    country:'',
    phoneNumber:'',
    confirmPassword:'',
    accountNumber:'',
    pin:'',
    amount:''

}
export const Usercontext = createContext<IUsercontext>({user:userDefault,setUser:()=>{}})


export default function Usercontextprovider({children}:{children:ReactNode}){
    const [user,setUser] = useState<ISignupinput>(userDefault)

    return(<Usercontext.Provider value={{user,setUser}}>
    {children}
    </Usercontext.Provider>)
}