import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Pranit Mane',
  description: 'Hello, I am Pranit, Software developer based in India.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
      {children}
      </>
  )
}
