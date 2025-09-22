'use client'
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaAngleLeft } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@radix-ui/react-dropdown-menu";
import { FormEvent } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import EmptyBeneficiary from '../../../public/EmptyBeneficiary.png';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Dashboardnavcomp from "@/app/mycomps/Dashboardnavcomp";
import useUser from "@/app/mycomps/hooks/useUser";
import { useRouter } from "next/navigation";

export default function Transfers() {
  const { user, setUser } = useUser();
  const [transferUser, setTransferUser] = useState<any>();
  const [address, setAddress] = useState('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const userAmount = Cookies.get('amount'); // Cookie for user amount
  const userCookie = Cookies.get('User');
  let parsedUser: any;
  if (userCookie) {
    parsedUser = JSON.parse(userCookie);
  }
  const email = parsedUser?.email || '';

  const doTransaction = () => {
    console.log('doing transaction');
    if (typeof userAmount === 'string') {
      const amountNum = parseInt(userAmount);
      const amountNum2 = parseInt(amount);
      console.log(amountNum, amountNum2);
      if (amountNum < amountNum2) {
        setError('Insufficient funds');
        return;
      }
    }
    // Only update the UI with success message, no Firebase or cookie updates
    setSuccess('Transaction successful');
    setTimeout(() => router.push('/dashboard'), 2000);
  };

  useEffect(() => {
    console.log(typeof userAmount);
    const userCookie = Cookies.get('User');
    if (!user) {
      if (userCookie) {
        setUser(JSON.parse(userCookie));
        console.log(user);
      } else {
        router.push('/login');
      }
    }
  }, [userAmount]);

  function formatWithCommas(value: string) {
    if (!value) return '';
    return parseInt(value).toLocaleString();
  }

  const findAccountByNumber = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(accountNumber);
    setError('');
    setSuccess('');

    if (!accountNumber || !amount) {
      setError('Please fill in all fields');
      return;
    }
    // Simulate finding an account (no Firebase call, just for demo)
    setTransferUser({
      firstname: 'John',
      lastname: 'Doe',
      accountNumber: accountNumber,
    });
    console.log('Simulated account found:', transferUser);
  };

  return (
    <>
      <Dashboardnavcomp />
      <div onClick={() => router.push('/dashboard')} className="cursor-pointer flex gap-x-2 items-center pt-6 py-3 px-4">
        <FaAngleLeft />
        <p className="text-sm font-semibold text-orange-600">Back</p>
      </div>
      <main className="px-4">
        <h1 className="text-xl font-bold">Transfers</h1>
        <div className="bg-white">
          <section className="p-4">
            <div className="relative w-full">
              <Alert className="flex items-center py-3 mt-4">
                <AlertDescription className="text-sm mt-2">
                  {`Premier Savings ${user?.accountNumber} (regular)`}
                </AlertDescription>
              </Alert>
            </div>
            <Alert className="flex items-center py-3 mt-4">
              <InfoIcon className="h-4 w-4 text-lg" />
              <AlertDescription className="text-xs mt-2">
                Dear Customer, a transfer key is required to complete this transaction.
              </AlertDescription>
            </Alert>
          </section>
        </div>
        <div className="bg-white py-4 mt-4 px-4">
          <div className="flex justify-between">
            <p className="text-xs">Daily Transaction Limit</p>
            <p className="text-xs font-semibold text-orange-600">$10,000</p>
          </div>
          <Select>
            <SelectTrigger className="w-full mt-4">
              <SelectValue placeholder="Select Bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FCbank">America Federal Union Bank</SelectItem>
              <SelectItem value="Wells Fargo">Wells Fargo</SelectItem>
              <SelectItem value="BOA">BOA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-white h-96 mt-8 p-4">
          <form onSubmit={findAccountByNumber} className="mt-6">
            <div className="mb-4">
              <label className="text-xs" htmlFor="account">Account Number:</label>
              <Input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className="" />
            </div>
            <div className="mb-4">
              <label className="text-xs" htmlFor="account">Routing number:</label>
              <Input className="" />
            </div>
            <div className="mb-4">
              <label className="text-xs" htmlFor="amount">Amount:</label>
              <Input
                value={formatWithCommas(amount)}
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/,/g, '');
                  if (!isNaN(Number(rawValue))) {
                    setAmount(rawValue);
                  }
                }}
                className=""
              />
            </div>
            <div className="mb-4">
              <label className="text-xs" htmlFor="address">Address:</label>
              <Input value={address} onChange={(e) => setAddress(e.target.value)} className="" />
            </div>
            <Dialog>
              <DialogTrigger>
                <Button className="w-full md:block md:mx-auto bg-orange-500 text-white" type="submit">
                  Check Details
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Details</DialogTitle>
                  {error && <p className="text-red-600">{error}</p>}
                  {success && <p className="text-green-600 border rounded-md p-2">{success}</p>}
                  <DialogDescription>
                    <p className="mb-2 mt-10">
                      Name: <span className="font-semibold text-black">Michele Burchfield </span>
                    </p>
                    <p className="mb-2">
                      Account Number: <span className="font-semibold text-black">{transferUser?.accountNumber}</span>
                    </p>
                    <p className="mb-2">
                      Bank: <span className="font-semibold text-black">BOA</span>
                    </p>
                    <p className="mb-2">
                      Amount: <span className="font-semibold text-black">${Number(amount).toLocaleString()}</span>
                    </p>
                    <p className="mb-2">
                      Address: <span className="font-semibold text-black">{address}</span>
                    </p>
                    <Button onClick={doTransaction} className="w-full bg-orange-500 text-white mt-6">
                      Confirm
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      </main>
    </>
  );
}