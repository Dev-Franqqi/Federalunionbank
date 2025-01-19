'use client'

import { useContext } from "react"
import { Opencontext } from "../context/Opencontext"

export default function useOpen(){
    const context = useContext(Opencontext)
    if(!context){
        throw new Error('Open context not available')
    }

    return context;
}


