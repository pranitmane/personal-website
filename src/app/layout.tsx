import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/ui/shared/navbar";
import { Analytics } from "@vercel/analytics/react";
import SocialLinks from "@/components/ui/shared/social-links";
import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
  title: "Pranit Mane",
  description: "Software engineer based in India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="darkTheme relative bg-primary text-primary-txt ">
        <div className="flex flex-col min-h-screen items-center justify-begin">{children}</div>
        {/* <section className='flex flex-col flex-1 justify-end w-full sm:w-[640px] gap-5'>
          <hr className='border-border-primary' />
          <SocialLinks />
        </section> */}
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 rounded-full">
          <NavBar />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
