"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {useRouter} from "next/navigation"
import Link from "next/link";
import Logo from '../../public/AFCU.png'
import { useEffect } from "react";
import Cookies from "js-cookie"
import Ladywithcomputer from "../image/pexels-christina-morillo-1181292.jpg"
import {useForm,SubmitHandler} from 'react-hook-form'
import { getDoc,doc } from "firebase/firestore";
import {db} from "../mycomps/firebase";
import { auth } from "../mycomps/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export type ILogininput ={
 email:string,
 password:string,
 
}
export default function Login() {
  const router = useRouter()
   
    const {register,handleSubmit,setError,formState:{errors,isSubmitting}} =useForm<ILogininput>()

    const onSubmit: SubmitHandler<ILogininput> = async (data) => {
      try {
        // Fetch user information from Firestore
        const userDoc = await getDoc(doc(db, "UserInfo", data.email));
        if (userDoc.exists()) {
          Cookies.set('User', JSON.stringify(userDoc.data()));
        } else {
          throw new Error("User not found");
        }
    
        // Sign in with Firebase authentication
        await signInWithEmailAndPassword(auth, data.email, data.password);
    
        // Redirect to dashboard upon successful login
        router.push('/dashboard');
      } catch (error: any) {
        console.error(error.message);
    
        // Handle specific error cases
        if (error.code === "auth/invalid-credential") {
          setError('root', {
            type: 'manual',
            message: 'Email or password incorrect.',
          });
        } else {
          setError('root', {
            type: 'manual',
            message: error.message || 'An unexpected error occurred.',
          });
        }
      }
    };
    
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      router.push('/dashboard')
      
    }
  })

  return (
    <div className="bg-white h-screen md:flex">
      <Image
        src={Ladywithcomputer}
        className="hidden md:block md:h-full md:w-3/5 md:object-cover "
        alt=""
      />
      <main className="px-6 py-10  md:pl-28 md:w-2/5">
        <h1 className="text-center text-3xl font-bold">        <Image src={Logo} width={100} className="" alt="AFCU" />
        </h1>

        <h2 className="text-xl font-semibold mb-3 mt-7">
          Log in to your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" leading-10 w-full">
          {errors.root && <p className="text-red-600">{errors.root.message}</p>}
          <label className="text-sm" htmlFor="email">
            Email or Username
          </label>
          <Input
            type="email"
            placeholder="Enter Email or Username"
            {...register('email',{
              required:'Email is required',

            })}

          />
          {errors.email && <div className="text-red-600">{errors.email.message}</div>}

          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
           {...register('password',{
            required:"Password is required",
            minLength:{value:8,message:'Password length should be at least 8'}
            
           })}
          />
          {errors.password && <div className="text-red-600">{errors.password.message}</div>}

          <Link
            className="flex justify-end mb-2 text-blue-500"
            href="/forgotpassword"
          >
            Forgot password?
          </Link>
          <Button
            className="block font-bold text-center bg-blue-600 text-white w-full"
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </form>

        <p className="text-center mt-4">
          Dont have an account? <Link className="text-blue-600" href="/signup">Sign up</Link>{" "}
        </p>
        <footer className="bg-white text-center mt-10">
          <p className="text-gray-300">
            &copy;2025 ASAP Bank. All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}
