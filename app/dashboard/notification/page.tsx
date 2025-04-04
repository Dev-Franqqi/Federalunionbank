'use client'
import Murray from '../../../public/personal/murrayedwards.svg'
import Image from 'next/image'
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
export default function Notification(){
    const router = useRouter()
    
  return(
    <div className="flex flex-col gap-y-6 p-6">
        <div className="flex gap-x-5 items-center">

        <ChevronLeft onClick={()=>{router.push('/dashboard')}} />
      <h1 className="text-2xl font-bold text-orange-500">Notifications</h1>
        </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2 px-4 py-4 rounded-md  border border-orange-500">
          {/* <p className="text-sm text-muted-foreground">No notifications yet</p> */}

          <p className="font-bold text-lg">ACFU </p>
<p>

To Whom It May Concern,
</p>
<p>

This letter serves as confirmation that Kevin Costner, account holder of 7468567148, last 4 digits: XXXX], has sufficient funds available to complete the purchase of a property. As of the date of this letter, the available balance in the account is $3,600,000, which exceeds the required amount of $300,000 for the intended transaction.
</p>


<p>

These funds are readily accessible and available for withdrawal or transfer. This letter is provided at the request of Kevin Costner to demonstrate financial capability for a real estate purchase.
</p>

<p>

For any further inquiries, please contact support 
</p>

Sincerely,  
Murray Edward
  
<p>American Federal Credit Union</p>
<Image src={Murray} width={100} height={100} alt=''/>



        </div>
      </div>
    </div>
  )
}