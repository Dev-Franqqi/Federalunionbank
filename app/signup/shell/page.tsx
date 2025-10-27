"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth,db } from '@/app/mycomps/firebase';
import Shell from '@/public/Shell.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

// Define the form data type
interface SignupFormData {
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  email: string;
  password: string;
  type:string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignupFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      phoneNumber: '',
      email: '',
      type:'shell',
      password: '',
      confirmPassword: '',
    },
  });


  // Watch password field for confirmPassword validation
  const password = watch('password');
  const comparePassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      throw new Error('Passwords do not match');
    }
  };

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      // Compare passwords
      comparePassword(data.password, data.confirmPassword);

      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);

      // Save user data to Firestore with accountType: "Shell"
      const userInfo = {
        ...data,
        accountType: 'Shell',
      };
      await setDoc(doc(db, 'UserInfo', data.email), userInfo);

      // Set user data in a cookie
      Cookies.set('User', JSON.stringify(userInfo));

      // Redirect to dashboard
      await router.push('/dashboard');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setError('email', {
          type: 'manual',
          message: 'This email is already registered. Please try another one.',
        });
      } else {
        setError('root', {
          type: 'manual',
          message: error.message || 'An unexpected error occurred.',
        });
        console.error('Signup Error:', error);
      }
    }
  };

  useEffect(() => {
    if (errors.root) {
      console.log('Form Error:', errors.root);
    }
  }, [errors.root]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500">
      <div className="bg-orange-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <Image src={Shell} alt="Shell Logo" width={120} height={120} className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Shell Account</h2>
        <p className="text-center text-sm text-gray-600 mb-4">Account Type: Shell</p>
        {errors.root && <p className="text-orange-600 text-sm mb-4 text-center">{errors.root.message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'First Name is required' })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="text-orange-600 text-sm mt-1">{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'Last Name is required' })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="text-orange-600 text-sm mt-1">{errors.lastName.message}</p>}
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <Input
              type="text"
              id="country"
              {...register('country', { required: 'Country is required' })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your country"
            />
            {errors.country && <p className="text-orange-600 text-sm mt-1">{errors.country.message}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phoneNumber"
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: 'Phone Number is invalid',
                },
              })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your phone number (e.g., +1234567890)"
            />
            {errors.phoneNumber && <p className="text-orange-600 text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>
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
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
              })}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-orange-600 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-200 disabled:bg-orange-300"
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login/shell" className="text-orange-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;