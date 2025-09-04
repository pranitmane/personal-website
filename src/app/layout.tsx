import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/ui/shared/navbar'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import SocialLinks from '@/components/ui/shared/social-links'
import { GeistSans } from 'geist/font/sans'


// const open_sans = Open_Sans({ subsets: ["latin"] })


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
      <body className="darkTheme flex flex-col gap-24 items-center justify-center p bg-primary text-primary-txt p-4">
        <NavBar />
        <div className='w-full sm:w-[640px]'>
          {children}
        </div>
        <section className='flex flex-col flex-1 justify-end w-full sm:w-[640px] gap-5'>
          <hr className='border-border-primary' />
          <SocialLinks />
        </section>
        <Analytics />
      </body>
    </html>
  )
}
