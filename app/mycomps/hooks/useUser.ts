'use client'
import { useContext } from "react"
import { Usercontext } from "../context/Usercontext"
export default function useUser(){
    const context=useContext(Usercontext)
    if(!context){
        throw new Error('User context not available')
    }
    return context
    
}