"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/mycomps/firebase';
import Shell from '@/public/Shell.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { db } from '@/app/mycomps/firebase';
import { getDoc, doc } from 'firebase/firestore';
// Define the form data type
interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
      try {
        //just one time stuff
        
  
        
  
        //
  
  
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

  // const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
  //   try {
  //     // Sign in with email and password
  //     const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);

  //     // Save user data in a cookie
  //     const userInfo = {
  //       email: data.email,
  //       accountType: 'Shell',
  //     };
  //     Cookies.set('User', JSON.stringify(userInfo));

  //     // Redirect to dashboard
  //     await router.push('/dashboard');
  //   } catch (error: any) {
  //     if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
  //       setError('root', {
  //         type: 'manual',
  //         message: 'Invalid email or password.',
  //       });
  //     } else {
  //       setError('root', {
  //         type: 'manual',
  //         message: error.message || 'An unexpected error occurred.',
  //       });
  //       console.error('Login Error:', error);
  //     }
  //   }
  // };

  useEffect(() => {
    if (errors.root) {
      console.log('Form Error:', errors.root);
    }
  }, [errors.root]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500">
      <div className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <Image src={Shell} alt="Shell Logo" width={120} height={120} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center mb-6">Log In to Your Account</h2>
        {errors.root && <p className="text-orange-600 text-sm mb-4 text-center">{errors.root.message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Email is invalid',
                },
              })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-orange-600 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-orange-600 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200 disabled:bg-orange-300"
          >
            {isSubmitting ? 'Logging In...' : 'Log In'}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup/shell" className="text-orange-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;