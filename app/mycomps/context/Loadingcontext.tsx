'use client'
import { Dispatch, ReactNode, createContext } from "react"
import { useState } from "react"

type Props = {
    children:ReactNode
}

type Loadedtypes = {
    loaded:boolean,
    setLoaded:Dispatch<boolean>
}
export const Loadingcontext = createContext<Loadedtypes>({loaded:false, setLoaded:()=>{}})

export default function Loadedcontextprovider({children}:Props){
    const [loaded, setLoaded] = useState(false)
    return(
        <Loadingcontext.Provider value={{loaded,setLoaded}}>
            {children}
        </Loadingcontext.Provider>
    )
}