import type { Metadata } from 'next'
import Opencontextprovider from '../mycomps/context/Opencontext';



export const metadata: Metadata = {
  title: 'AFCU',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
       
        <Opencontextprovider>

        {children}
        </Opencontextprovider>
         
      </body>
    </html>
  );
}
