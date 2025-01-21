"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Boardimage from "../image/pexels-christina-morillo-1181396.jpg"
import Logo from '../../public/AFCU.png'

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { auth } from "../mycomps/firebase"
import { useForm,SubmitHandler } from "react-hook-form"
import { setDoc,doc } from "firebase/firestore"
import { db } from "../mycomps/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
export type ISignupinput={
  
  firstname:string,
  lastname:string,
  email:string,
  password:string,
  confirmPassword:string,
  pin:string,
  phoneNumber:string,
  country:string,
  address:string,
  accountNumber:string,
  amount:string

}

export default function Signup() {
  const router = useRouter()
  const {register,handleSubmit,setError,formState:{errors,isSubmitting}} = useForm<ISignupinput>()
  
  const comparePassword = (a:string, b:string) => {
    if (!(a === b)) {
      setError("root",{type:"custom",message:"Passwords do not match"});
   throw new Error("passwords do not match")
  }
};
function generateAccountNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}


const onSubmit: SubmitHandler<ISignupinput> = async (data) => {
  try {
    // Compare passwords
    comparePassword(data.password, data.confirmPassword);

    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

    // Save user data to Firestore
    const userInfo = {
      ...data,
      accountNumber: generateAccountNumber(),
      amount: 0,
    };
    await setDoc(doc(db, 'UserInfo', data.email), userInfo);

    // Set user data in a cookie
    Cookies.set('User', JSON.stringify(userInfo));

    // Redirect to dashboard
    await router.push('/dashboard');
  } catch (error: any) {
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      // Handle email already in use
      setError('root', {
        type: 'manual',
        message: 'This email is already registered. Please try another one.',
      });
    } else {
      // Handle other errors
      setError('root', {
        message: error.message || 'An unexpected error occurred.',
      });
      console.error('Signup Error:', error);
    }
  }
};


  useEffect(()=>{
    console.log(errors.root)
  },[errors.root])
    return (
      <div className="bg-white h-screen md:flex relative">
        {isSubmitting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
        <Image
          src={Boardimage}
          alt=""
          className="hidden md:block md:h-full md:w-3/5 md:object-cover"
        />

        <main className="px-6 bg-white py-10 md:py-6 ">
          <h1 className="text-center text-3xl font-bold">        <Image src={Logo} width={100} className="" alt="AFCU" />
          </h1>

          <h2 className="text-xl font-semibold mb-3 mt-7">
            Sign up to access great features
          </h2>
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
              login
            </Link>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="leading-10 md:leading-8">
            {errors.root && <p className="text-red-600">{errors.root.message}</p> }
            
            <section className="md:flex md:gap-3">
              <div>
                <label className="text-sm" htmlFor="firstname">
                  Firstname
                </label>
                <Input
                  {...register('firstname')}
                  type="text"
                  placeholder="Enter firstname"
                  required
                />
              </div>
              <div>
                <label className="text-sm" htmlFor="lastname">
                  Lastname
                </label>
                <Input
                  {...register('lastname')}
                  type="text"
                  placeholder="Enter lastname"
                  required
                />
              </div>
            </section>

            <label className="text-sm" htmlFor="Email">
              Email
            </label>
            <Input
              {...register('email')}
              type="email"
              placeholder="Enter Email"
              required
            />
            <section className="md:flex md:gap-3">
               <div>
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
              </div>
              <div>
                <label className="text-sm" htmlFor="confirm">
                  Confirm Password
                </label>
                <Input
                 {...register('confirmPassword')}
                  type="text"
                  placeholder="Confirm password"
                  required
                />
                
              </div>
            </section>

            <label className="text-sm" htmlFor="countrty">
              Country
            </label>
            <Input type="text"
            {...register('country')} placeholder="Enter country" required />

            <label className="text-sm" htmlFor="phone">
              Phone
            </label>
            <Input
           {...register('phoneNumber')}  placeholder="Enter phone number" type="text" required />


           <div>
           <label className="text-sm" htmlFor="Pin">
              Pin
            </label>
           <Input className="w-2/4" type="number" {...register('pin',{maxLength:{value:4,message:"Pin should be a 4 digit number"}})}/>
           {errors.pin && <p className="text-red-600">{errors.pin.message}</p>}
           </div>

            <Button
              className="block font-bold text-center mt-4 bg-blue-600 text-white w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Signup
            </Button>
          </form>

          <footer className="mt-2 text-center text-gray-300">
            &copy;2025 AFCU Bank
          </footer>
        </main>
      </div>
    );
}