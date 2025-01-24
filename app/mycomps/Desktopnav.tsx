"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cookies from "js-cookie"
import { ILogininput } from "../login/page";
import { useForm,SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import { getDoc,doc } from "firebase/firestore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState,FormEvent } from "react"
import {useRouter} from "next/navigation"

export default function Desktopnav() {
  const router = useRouter()
  const {register,handleSubmit,setError,formState:{errors,isSubmitting}} = useForm<ILogininput>()
  const onSubmit: SubmitHandler<ILogininput> = async (data) => {
    try {
      const userDoc = await getDoc(doc(db, "UserInfo", data.email));
      if (userDoc.exists()) {
        Cookies.set("User", JSON.stringify(userDoc.data()));
      } else {
        throw new Error("User not found");
      }

      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push("/dashboard");
    } catch (error: any) {
      console.error(error.message);

      if (error.code === "auth/invalid-credential") {
        setError("root", {
          type: "manual",
          message: "Email or password incorrect.",
        });
      } else {
        setError("root", {
          type: "manual",
          message: error.message || "An unexpected error occurred.",
        });
      }
    }
  };
 
 useEffect(()=>{
 },[])
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between px-8  text-sm">
          <ul className="flex space-x-2">
            <li>About us</li>
            <li>Financial Support</li>
          </ul>

          <div className="">
            <span className="mr-2">Support</span>
            <Sheet>
              <SheetTrigger className="text-blue-600">Login</SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Log in</SheetTitle>
                  <SheetDescription>
                    Get Signed in into your account
                  </SheetDescription>
                </SheetHeader>
                
                {errors.root && <p className="text-red-600 mt-4 border border-red-200 rounded-md p-4">{errors.root.message}</p>}
                              
                              <form onSubmit={handleSubmit(onSubmit)}>
                                  <Input {...register('email')} className="mt-8 mb-4" placeholder="Email or Username" type="text" />
                                  <Input
            type="password"
            placeholder="Enter your password"
           {...register('password',{
            required:"Password is required",
            minLength:{value:8,message:'Password length should be at least 8'}
            
           })}
          />
          {errors.password && <div className="text-red-600">{errors.password.message}</div>}
                                  <Button className="bg-blue-600 text-white text-center w-full mt-4" disabled={isSubmitting} type="submit">Log In</Button>
                              </form>

                              <p className="text-center mt-4 text-sm">Forgot Your Password? <Link href={'#'} className="text-blue-600">click here</Link> </p>
                              <p className="text-center text-sm">Dont have an account? <Link className="text-blue-600" href="/signup">Sign up</Link></p>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <nav className="bg-white gap-4 flex py-2 px-10">
          <header>ASAP</header>
          <ul className="flex gap-6">
            <li>Personal</li>
            <li>Wealth Management</li>
            <li>Business</li>
            <li>Corporate & Commercial</li>
            <li>Institutional</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
