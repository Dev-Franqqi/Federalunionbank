import type { Metadata } from 'next'
// import {Inter} from "next/font"
import Loadedcontextprovider from './mycomps/context/Loadingcontext'
import Usercontextprovider from './mycomps/context/Usercontext'
import './globals.css'



export const metadata: Metadata = {
  title: 'AFCU',
  description: 'Manage your finances effortlessly with the America Federal Credit Union app. Enjoy secure banking, easy transfers, bill payments, account tracking, and 24/7 support. Simplify your banking today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
        <Loadedcontextprovider>
          <Usercontextprovider>

        {children}
          </Usercontextprovider>

        </Loadedcontextprovider>
      </body>
    </html>
  );
}
