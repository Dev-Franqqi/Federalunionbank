'use client'
import { Dispatch, ReactNode, createContext } from "react"
import { useState } from "react"

type Props = {
    children:ReactNode
}

type Loadingtypes = {
    loading:boolean,
    setLoading:Dispatch<boolean>
}
export const Loadingcontext = createContext<Loadingtypes>({loading:false, setLoading:()=>{}})

export default function loadingcontextprovider({children}:Props){
    const [loading, setLoading] = useState(true)
    return(
        <Loadingcontext.Provider value={{loading,setLoading}}>
            {children}
        </Loadingcontext.Provider>
    )
}