'use client'
import { useContext } from "react"
import { Loadingcontext } from "../context/Loadingcontext"
export default function useLoading(){
    const context = useContext(Loadingcontext)

    if(!context){
        throw new Error('Loading context not available')
    }

    return context


}       