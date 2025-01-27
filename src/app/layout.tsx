import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/navbar'
import { Inter, Open_Sans} from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import SocialLinks from '@/components/socialLinks'

const inter = Inter({ subsets: ["latin"] })
const open_sans = Open_Sans({ subsets: ["latin"] })

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
    <html lang="en" className={open_sans.className}>
      <body className="darkTheme flex flex-col gap-24 items-center justify-center p bg-primary text-primaryTxt p-4">
        <NavBar />
        <div className='w-full sm:w-[640px]'>
          {children}
        </div>
        <section className='flex flex-col flex-1 justify-end w-full sm:w-[640px] gap-5'>
          <hr className='border-borderPrimary' />
          <SocialLinks />
        </section>
        <Analytics />
      </body>

    </html>
  )
}
