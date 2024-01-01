import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/navbar'
import { GeistSans } from 'geist/font/sans'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Pranit Mane',
  description: 'Software engineer based in India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-black p-4  text-white flex flex-col items-center">
        <div className='pb-20 w-full md:w-[768px]'>
          {children}
        </div>
        <div className='w-full flex flex-row justify-center fixed bottom-2 '>
          <NavBar />
        </div>
      </body>

    </html>
  )
}
