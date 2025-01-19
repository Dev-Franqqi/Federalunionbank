'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
interface IOpen{
  isOpen:boolean,
  setIsOpen:Dispatch<SetStateAction<boolean>>
}

export const Opencontext = createContext<IOpen>({isOpen:false,setIsOpen:()=>{}})


export default function Opencontextprovider({children}:{children:ReactNode}){
    const [isOpen,setIsOpen] = useState(false)

    return(
        <Opencontext.Provider value={{isOpen,setIsOpen}}>

            {children}
        
        </Opencontext.Provider>
    )
}